import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import DecksPage from './pages/DecksPage';
import SkatesPage from './pages/SkatesPage';
import BearingsPage from './pages/BearingsPage';
import TrucksPage from './pages/TrucksPage';
import WheelsPage from './pages/WheelsPage';
import GripTapePage from './pages/GripTapePage';
import UpdateFormPage from './pages/UpdateFormPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/skates' element={<SkatesPage/>} />
          <Route path='/decks' element={<DecksPage/>} />
          <Route path='/bearings' element={<BearingsPage/>} />
          <Route path='/trucks' element={<TrucksPage/>} />
          <Route path='/wheels' element={<WheelsPage/>} />
          <Route path='/griptape' element={<GripTapePage/>} />
          <Route path='/update/:id' element={<UpdateFormPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
