import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Wheels from '../components/products/WheelsList'


const WheelsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Wheels/>
      <Footer/>
 
    </div>
  )
};

export default WheelsPage;