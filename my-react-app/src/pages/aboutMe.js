import React from 'react';
import '../components/flexContainer.css';
import './aboutMe.css';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutMe = () => {
    return (
        <div className="flex-container" id="about">
            <div className="flex-box signpost">
                <h1>About Me</h1>
            </div>

            <div className="flex-box content">
                <h2>Who I am</h2>
                <p>I am a final year computer engineering student at the National 
                    University of Singapore. I enjoy solving problems and building
                    solutions that are efficient and user-friendly.
                </p>
                <p>
                    I am currently looking for a job in the field of software engineering.
                    I am open to new opportunities and challenges.
                </p>
                <p>
                    Feel free to contact me or connect with me on LinkedIN! 
                </p>
                <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/rexyong/', '_blank')}>
                        <LinkedInIcon className="button-icon" /> Linked in
                </Button>
            </div>
        </div>
    );
};

export default AboutMe;