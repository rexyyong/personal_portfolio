/* code for the layout of the app */

import React from 'react';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import AboutMe from '../pages/aboutMe';
import Contact from '../pages/contact';

const Layout = () => {
  return (
    <div>
      <Navbar />    
      <Home />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Layout;
