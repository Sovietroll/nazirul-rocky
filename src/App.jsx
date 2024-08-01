import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact';
import Bar from './Bar.jsx';
import './App.css';
import './NavBar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const now = 60;
  document.title= "Zero Blog";

  return (
    
    <BrowserRouter>
    <Bar />

    <NavBar />
      <Routes>
        
        <Route path="home" element={<Home />} />
          <Route path="about" element = {<AboutMe />} />
          <Route path="contact" element = {<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
