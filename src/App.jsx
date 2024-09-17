import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
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

  document.title= "nazirul rocky";

  const logo =
  <img className="lg" 
  src='src/images/newLogo.svg' alt="logo" fill={'white'}
  onClick = {() => {window.scrollTo(0,0);}}
  />

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
    <BrowserRouter>

    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
      
      <NavBar {...{toggleDarkMode, isDarkMode}} />
      <Routes>
        <Route path="/nazirulrocky" element = 
        {<Home 
          {...{windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo,toggleDarkMode, isDarkMode}}
          />} 
        /> 
        <Route exact path="contact" element = {<Contact />} />
      </Routes>

      <Footer/>
      
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
