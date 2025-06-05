import React from 'react';
import './flexContainer.css';
import './contact.css';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './muiTheme';

const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target.elements;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    }
    try {
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Response from server:", data);
    } catch (error) {
        console.log("Error", error);
    }
    console.log("Form Data Submitted:", formData);
}

const Contact = () => {
    return(
        <div className="flex-container">
            <div className="flex-box">
                    <div className='signpost'>
                        <h1>LET'S CONNECT!</h1>
                        <p>Say hello at <a href="mailto:rexyyong@gmail.com">rexyyong@gmail.com</a></p>
                        <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/rexyong/', '_blank')}>
                            <LinkedInIcon className="button-icon" /> Linked in
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/rexyyong', '_blank')}>
                            <GitHubIcon className="button-icon" /> Github
                        </Button>
                    </div>
            </div>

            <div className="flex-box form">
                <h2>Get in touch</h2>
                <Box component="form" className="form-box" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <ThemeProvider theme={theme}>
                        <TextField required label="Name" name="name" fullWidth  />
                        <TextField required label="Email" name="email" fullWidth />
                        <TextField required label="Subject" name="subject" fullWidth />
                        <TextField required label="Message" name="message" multiline rows={4} fullWidth />
                    </ThemeProvider>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Contact;