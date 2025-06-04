/* code for the layout of the app */

import React from 'react';
import Navbar from '../components/navbar';
import Home from '../components/home';
import AboutMe from '../components/aboutMe';

const Layout = () => {
  return (
    <div>
      <Navbar />    
      <Home />
      <AboutMe />
    </div>
  );
};

export default Layout;
