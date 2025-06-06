import React from 'react';
import rex from '../assets/images/rex.jpg';
import './home.css';
import '../components/flexContainer.css';
import HomeButton from '../components/homeButton';

const Home = () => {
    return (
        <div className="flex-container" id="home">
            <div className="flex-box intro">
                <h1>Hello, I'm Rex</h1>
                <h2>I'm a software engineer based in Singapore</h2>
                <HomeButton />
            </div>
            <div className="flex-box">
                <img src={rex} alt="Rex" />
            </div>
        </div>
    );
};

export default Home;
