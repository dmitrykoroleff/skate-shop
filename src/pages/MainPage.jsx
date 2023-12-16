import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'


const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Footer/>
 
    </div>
  )
};

export default MainPage;