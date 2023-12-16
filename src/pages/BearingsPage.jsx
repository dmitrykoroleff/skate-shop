import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Bearings from '../components/products/BearingsList'


const BearingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Bearings/>
      <Footer/>
 
    </div>
  )
};

export default BearingsPage;