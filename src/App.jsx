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
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [lightMode,setLightMode] = useState(false);

  document.title= "NZ blog";

  const logo =
  <img className="lg" 
  src='src/images/newLogo.svg' alt="logo" fill={'white'}
  onClick = {() => {window.scrollTo(0,0);}}
  />

  const handleWindowResize = useCallback(event => {
    setWindowWidth(window.innerWidth);
  })

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  }

const colorlightMode = 
document.body.style.backgroundColor = ''



useEffect(() => {
    
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
  const handleClickOutside = (event) => {
    setIsClicked(false);
    setIsClickedTwo(false);
  }
  document.addEventListener('mousedown', handleClickOutside);
  // {lightMode? console.log('DARK') : console.log('LIGHT')};

  return() => {
    window.removeEventListener('resize', handleWindowResize)
    document.removeEventListener('mousedown', handleClickOutside)
  }
},[handleWindowResize][buttonRef]);

const lightTheme = createTheme({
  palette: {
    mode: toggleLightMode ? 'light' : 'dark',
    primary: {
      main: '#95d5b2',
    },
    secondary: {
      main: '#95d5b2',
    },
  },
})

// !   ----------RETURN--------------------------------------
  return (
    <BrowserRouter>

    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm' theme={lightTheme}>
      
      <NavBar {...{toggleDarkMode, setDarkMode, darkMode}} />
      <Routes>
        <Route path="/" element = 
        {<Home 
          {...{windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo}}
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
