import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tours from './components/Tours';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tour' element={<Tours />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App