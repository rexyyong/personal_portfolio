import React from 'react';
import rex from '../assets/images/rex.jpg';
import './home.css';
import './flexContainer.css';
import HomeButton from './homeButton';

const Home = () => {
    return (
        <div className="flex-container">
            <div className="flex-box intro">
                <h1>Hello, I'm Rex</h1>
                <p>I'm a software engineer based in Singapore</p>
                <HomeButton />
            </div>
            <div className="flex-box">
                <img src={rex} alt="Rex" />
            </div>
        </div>
    );
};

export default Home;
