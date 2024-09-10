import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
import Footer from './Footer.jsx'
import './CSS.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  document.title= "NZ blog";

  const logo =
  <img className="lg" 
  src='src/images/newLogo.svg' alt="logo" width={'40px'} fill={'white'}
  onClick = {() => {window.scrollTo(0,0);}}
  />




  return (
    <BrowserRouter>

    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
      
      <NavBar logo={logo} />
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route exact path="contact" element = {<Contact />} />
      </Routes>

      <Footer logo={logo}/>
      
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
