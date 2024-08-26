import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
import Footer from './Footer.jsx'
import './CSS.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import { Link as Relink, animateScroll as Scroll } from 'react-scroll';


function App() {
  const now = 60;
  document.title= "Zero Blog";


  return (
    <BrowserRouter>

    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
    {/* <Bar/> */}

    {/* <Relink to="experiences-container" spy={true} smooth={true} offset={50} duration={500}>test</Relink> */}

      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route exact path="contact" element = {<Contact />} />
      </Routes>

      <Footer/>
      
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
