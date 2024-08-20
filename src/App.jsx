import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
import Footer from './Footer.jsx'
import './App.css';
import './CSS.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  const now = 60;
  document.title= "Zero Blog";


  return (
    <BrowserRouter>
    <ThemeProvider breakpoints={['xl']} minBreakpoint='sm'>
    <Bar/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="contact" element = {<Contact />} />
      </Routes>

      <Footer/>
      
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
