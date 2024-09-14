import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
import Footer from './Footer.jsx'
import './CSS.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import {MyLogo} from './Icons';
import { useState,useEffect,useCallback,useRef } from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [darkMode,setDarkMode] = useState(false);
  const buttonRef = useRef(null);


  
  const handleWindowResize = useCallback(event => {
    setWindowWidth(window.innerWidth);
  })

  
  document.title= "NZ blog";

  const logo =
  <img className="lg" 
  src='src/images/newLogo.svg' alt="logo" fill={'white'}
  onClick = {() => {window.scrollTo(0,0);}}
  />

  const toggleDarkMode = () => {
    // const [darkMode,setDarkMode] = useState(false);
    setDarkMode(!darkMode);
}

useEffect(() => {
    
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
  const handleClickOutside = (event) => {
    setIsClicked(false);
    setIsClickedTwo(false);
  }
  document.addEventListener('mousedown', handleClickOutside);
  // document.body.style.backgroundColor = 'white';


  return() => {
    window.removeEventListener('resize', handleWindowResize)
    document.removeEventListener('mousedown', handleClickOutside)
  }
},[handleWindowResize][buttonRef]);
  return (
    <BrowserRouter>

    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
      
      <NavBar {...{toggleDarkMode, setDarkMode, darkMode}} />
      <Routes>
        <Route path="/" element = 
        {<Home {...{windowWidth,buttonRef}}/>} 
        /> 
        <Route exact path="contact" element = {<Contact />} />
      </Routes>

      <Footer/>
      
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
