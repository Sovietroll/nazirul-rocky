import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MyPortfolio from './MyPortfolio';
import Bar from './Bar.jsx';

import './App.css';
import './NavBar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  const now = 60;
  document.title= "Zero Blog";

  return (
    <BrowserRouter>
    <NavBar/>
    <Bar />

      <Routes>
        
        <Route path="home" element={<Home />} />
          <Route path="about" element = {<AboutMe />} />
          <Route path="portfolio" element = {<MyPortfolio />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
