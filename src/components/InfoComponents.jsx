import React from 'react'
import { useState } from 'react';
import Home from './Home.jsx';
import Galery from './Galery.jsx';
import Contact from './Contact.jsx';
import About from './About';


function InfoComponents() {
  const [selected] = useState('Home');

  const renderContent = () => {
    switch (selected) {
      case 'Home':
        return <Home className='info active'/>;

      case 'Galery':
        return <Galery className='info'/>;

      case 'About':
        return <About className='info'/>;

      case 'Contact':
        return <Contact className='info'/>;

      default:
        return <Home className='info active' />;
    }
  };
  return (
    <div className='info_content'>
      <div className='info_content_table'>
        {renderContent()}
      </div>
    </div> 
  )
}

export default InfoComponents