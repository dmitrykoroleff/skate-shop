import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Decks from '../components/products/DecksList'


const DecksPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <Decks/>
      <Footer/>
 
    </div>
  )
};

export default DecksPage;