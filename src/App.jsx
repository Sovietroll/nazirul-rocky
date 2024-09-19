import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Footer from './Footer.jsx'
import './assets/css/style.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { useState,useEffect,useCallback,useRef } from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [isDarkMode,setDarkMode] = useState(true);

  // document.title= "nazirul rocky";


  const handleWindowResize = useCallback(event => {
    setWindowWidth(window.innerWidth);
  })

  //* DEFAULT IS DARK MODE - FALSE 
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

useEffect(() => {
    
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
  const handleClickOutside = (event) => {
    setIsClicked(false);
    setIsClickedTwo(false);
  }
  document.addEventListener('mousedown', handleClickOutside);
  document.body.className = isDarkMode? '' : 'light-mode' ;

  return() => {
    window.removeEventListener('resize', handleWindowResize)
    document.removeEventListener('mousedown', handleClickOutside)
  }
},[handleWindowResize],[buttonRef],[isDarkMode]);



// !   ----------RETURN--------------------------------------
  return (


    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
      
      <NavBar {...{toggleDarkMode, isDarkMode}} />
     <Home 
          {...{windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo,toggleDarkMode, isDarkMode}}
          />
      <Footer/>
      
      </ThemeProvider>

  )
}

export default App
