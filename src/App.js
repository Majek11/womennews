import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/common/footer/Footer.jsx';
import Header from './components/common/header/Header';
import Homepage from './components/home/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import WomenDiary from './pages/WomenDiary/WomenDiary';
import SinglePages from './singlePages/Singlepages.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/singlepage/:id' element={<SinglePages />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/womendiary' element={<WomenDiary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
