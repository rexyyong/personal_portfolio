import dotenv from 'dotenv';
dotenv.config({path: '../config.env'}); // Load environment variables from config.env  
import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

const router = express.Router();

// Create a transporter using OAuth2 for Gmail. 
// This allows sending emails without exposing your password.
// Make sure to set up your OAuth2 credentials in the .env file.
const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};

//emailOptions - who sends what to whom
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

// Route to handle incoming user data
// This route will be called when the contact form is submitted.
// It saves the data to the database and sends an email.
router.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email to user 
    await sendEmail({
      subject: "Thank you for contacting me!",
      text: "Dear " + name + 
            ",\n\nThank you for reaching out!" +
            "I will get back to you as soon as possible.\n\n" +
            "Heres a summary of your response: \n" +
            "Name: " + name + 
            "\nEmail: " + email +
            "\nSubject: " + subject +
            "\nMessage: " + message +
            "\n\nBest regards,\nRex Yong",
      to: email,
      from: process.env.EMAIL
    });

    // send email to myself
    await sendEmail({
      subject: "New contact form submission",
      text: "You have received a new message from your contact form:\n\n" +
            "Name: " + name + 
            "\nEmail: " + email +
            "\nSubject: " + subject +
            "\nMessage: " + message,
      to: process.env.EMAIL,
      from: process.env.EMAIL
    });

    res.status(200).json({ message: "User data received and email sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;