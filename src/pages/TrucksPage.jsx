import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Trucks from '../components/products/TrucksList'


const SuspensionsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Trucks/>
      <Footer/>
 
    </div>
  )
};

export default SuspensionsPage;