import React, { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import UpdatePage from '../components/update'



const UpdateFormPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    };
    
  return (
    <div className='App'>

      <Header toggle={toggle} />
      <UpdatePage/>
      <Footer/>
 
    </div>
  )
};

export default UpdateFormPage;