import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MyPortfolio from './MyPortfolio';
import './App.css';
import './NavBar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgressBar from "react-scroll-progress-bar";

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="home" element={<Home />} />
          <Route path="about" element = {<AboutMe />} />
          <Route path="portfolio" element = {<MyPortfolio />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
