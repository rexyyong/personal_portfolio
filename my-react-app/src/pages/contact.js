import React from 'react';
import '../components/flexContainer.css';
import './contact.css';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/muiTheme';
import { LoadingButton } from '@mui/lab';
import ModelViewer from '../components/modelViewer';

const Contact = () => {
    const [loading, setLoading] = React.useState(false);	

    const handleFailSubmit = () => {
    alert("There was an error submitting your message. Please try again later.");
    console.log("Form submission failed");
    }

    const handleSuccessSubmit = () => {
        alert("Thank you for your message! I will get back to you soon!");
        document.querySelector('.form-box').reset();
        console.log("Form reset after successful submission");
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
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

            if (!response.ok) {
                // Backend returned an error (e.g., unauthorized_client)
                throw new Error(data.error || "Unknown server error");
            }

            console.log("Response from server:", data);
            handleSuccessSubmit();
            console.log("Form Data Submitted:", formData);
        } catch (error) {
            console.log("Error", error);
            handleFailSubmit();
        }
        setLoading(false);
    }

    return(
        <div className="flex-container" id="contact">
            <div className="flex-box">
                    <div className='signpost'>
                        <h1>LET'S CONNECT!</h1>
                        <h3>Say hello at <a href="mailto:rexyyong@gmail.com">rexyyong@gmail.com</a></h3>
                        <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/rexyong/', '_blank')}>
                            <LinkedInIcon className="button-icon" /> Linked in
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/rexyyong', '_blank')}>
                            <GitHubIcon className="button-icon" /> Github
                        </Button>
                        <div className="model-viewer-wrapper">
                            <ModelViewer scale="4" modelPath={"/assets/blender/tREX.glb"} />
                        </div>
                    </div>
            </div>

            <div className="flex-box form">
                <h2>Get in touch</h2>
                <Box component="form" className="form-box" autoComplete="off" onSubmit={handleSubmit}>
                    <ThemeProvider theme={theme}>
                        <TextField required label="Name" name="name" fullWidth  />
                        <TextField required type="email" label="Email" name="email" fullWidth />
                        <TextField required label="Subject" name="subject" fullWidth />
                        <TextField required label="Message" name="message" multiline rows={4} fullWidth />
                        <LoadingButton
                        variant="contained"
                        color="primary"
                        type="submit"
                        loading={loading}
                        >
                            Submit
                        </LoadingButton>
                    </ThemeProvider>
                </Box>
            </div>
            <div style={{ height: "40vh" }} />
        </div>
    )
}

export default Contact;