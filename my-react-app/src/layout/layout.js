/* code for the layout of the app */

import React from 'react';
import Navbar from '../components/navbar';
import Home from '../components/home';
import AboutMe from '../components/aboutMe';
import Contact from '../components/contact';

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
