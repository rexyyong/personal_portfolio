/* code for the layout of the app */

import React from 'react';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import AboutMe from '../pages/aboutMe';
import Contact from '../pages/contact';
import MySkills from '../pages/mySkills';
import './layout.css'; // Assuming you have a layout.css for styling the layout

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Home />
        <AboutMe />
        <MySkills />
        <Contact />
      </main>
    </div>
  );
};

export default Layout;
