import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tours from './components/Tours';

const App = () => {
  const [theme,setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia(('prefers-color-scheme: dark')).matches) {

      setTheme('dark');

    }else{
      setTheme('Light');
    }

  },[])

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');

    }
  })
  return (
    <div className='bg-white dark:bg-slate-900'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tour' element={<Tours />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App