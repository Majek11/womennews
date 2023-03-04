import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import Homepage from './components/home/Homepage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
