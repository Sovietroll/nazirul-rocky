import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Footer from './Footer.jsx'
import './assets/css/style.scss';
import { motion} from "framer-motion";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { useState,useEffect,useCallback,useRef } from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [isDarkMode,setDarkMode] = useState(true);
  const [scrollTop, setScrollTop] = useState(false);


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

const bgColor = {
  dark: {
    backgroundColor: 'white'
  }
  ,
  light: {
    backgroundColor: '#009785',
    color: 'white'
  }
} 

const variant = {
  contactMe: 
  {
    opacity: 1,
    y: 0,
    transition: 
      {type: "spring",
        bounce: .6,
        duration: 1.5
      }
  }
  ,   
  resume:
  {
    opacity: 1,
    scale: 1.2,
    transition: 
    {type: "spring",
      bounce: .7,
      duration: 1.5
    }
  }  
}


const ButtonResume = ({content,id}) => (
  <a href={content === 'Resume' ? 'https://drive.google.com/file/d/1a6rkPxxt_dtIePPV2LAZAPDDr-jtq3bs/view?usp=sharing' : null}>
  <motion.button
  id={id}
    onClick={
      content === 'Contact Me!'? () => window.scrollTo(0,document.body.scrollHeight)
      : () => {}}
    className='button-resume fw-bold'
    variants={variant}
    initial={{ opacity: 0, y:-20 }}
    whileInView={'contactMe'}
    whileTap={{scale: 1.1,}}
    style={isDarkMode? bgColor.dark : bgColor.light}
    >
      {content}
  </motion.button>
  </a>
)


// !   ----------RETURN--------------------------------------
  return (


    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
      
      <NavBar {...{toggleDarkMode, isDarkMode}} />
     <Home 
          {...{windowWidth,buttonRef,isClicked, setIsClicked,isClickedTwo,setIsClickedTwo,ButtonResume,toggleDarkMode, isDarkMode}}
          />
      <Footer {...{windowWidth,ButtonResume}}/>
      
      </ThemeProvider>

  )
}

export default App
