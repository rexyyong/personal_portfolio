import express from 'express';
import Contact from '../models/Contact.js'; 
import formData from 'form-data'; 
import Mailgun from 'mailgun.js'; 

const mailgun = new Mailgun(formData);
const router = express.Router();

console.log("Contact route file loaded (Mailgun version)");

router.post("/api/contact", async (req, res) => {
    console.log("POST /api/contact hit");
    console.log("BODY RECEIVED:", req.body);
    const { name, email, subject, message } = req.body;

    const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY, 
    });

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.error("Mailgun API Key or Domain is not set. Check environment variables.");
      return res.status(500).json({ error: "Server configuration error." });
    }

    try {
        const contact = new Contact({ name, email, subject, message });
        await contact.save();
        console.log("Contact saved to MongoDB.");

        // --- START OF CHANGES ---

        // 1. Create the notification email for YOURSELF
        const msgToSelf = {
            from: `Rex Yong (Portfolio) <mail@${process.env.MAILGUN_DOMAIN}>`, 
            to: 'rexyyong@gmail.com', // Your personal email
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your contact form:\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n` +
                  `Subject: ${subject}\n` +
                  `Message: ${message}`
        };
        
        // 2. Create the confirmation email for the USER
        const msgToUser = {
            from: `Rex Yong <mail@${process.env.MAILGUN_DOMAIN}>`,
            to: email, // <-- This sends to the person who filled out the form
            subject: 'Thank you for contacting me!',
            text: `Hi ${name},\n\n` +
                  `Thank you for reaching out! I've received your message and will get back to you as soon as possible.\n\n` +
                  `Best regards,\n` +
                  `Rex Yong`
        };

        // 3. Send BOTH emails
        console.log("Sending notification to self...");
        await mg.messages.create(process.env.MAILGUN_DOMAIN, msgToSelf);
        
        console.log("Sending confirmation to user...");
        await mg.messages.create(process.env.MAILGUN_DOMAIN, msgToUser);

        // --- END OF CHANGES ---

        console.log("Emails sent successfully.");

        res.status(200).json({ message: "User data received and email sent successfully!" });

    } catch (err) {
        console.error("Error in contact form:", err);
        if (err.response) {
          console.error(err.response.body);
        }
        res.status(500).json({ error: "Failed to send message." });
    }
});

export default router;