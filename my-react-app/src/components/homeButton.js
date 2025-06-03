import React from 'react';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import './homeButton.css';

const HomeButton = () => {
    return (
        <>
            <div className="flex-container-button">
                <Button variant="contained" color="primary">
                    <RecentActorsIcon className="button-icon" /> Contact Me
                </Button>
                <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/rexyong/', '_blank')}>
                    <LinkedInIcon className="button-icon" /> Linked in
                </Button>
                <Button variant="contained" color="primary" onClick={() => window.open('https://github.com/rexyyong', '_blank')}>
                    <GitHubIcon className="button-icon" /> Github
                </Button>
            </div>
        </>
    )
}

export default HomeButton;  
