import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Skates from '../components/products/SkatesList'


const SkatesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Skates/>
      <Footer/>
 
    </div>
  )
};

export default SkatesPage;