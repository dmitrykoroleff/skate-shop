import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import GripTape from '../components/products/GripTapeList'


const GripTapePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <GripTape/>
      <Footer/>
 
    </div>
  )
};

export default GripTapePage;