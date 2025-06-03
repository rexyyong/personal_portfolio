/* code for the layout of the app */

import React from 'react';
import Navbar from '../components/navbar';
import Home from '../components/home';

const Layout = () => {
  return (
    <div>
      <Navbar />    
      <Home />
    </div>
  );
};

export default Layout;
