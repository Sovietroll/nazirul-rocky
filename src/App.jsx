import NavBar from './NavBar.jsx';
import CenterPage from './CenterPage';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import MyPortfolio from './MyPortfolio';
import './App.css';
import './NavBar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="home" element={<Home />} />
          <Route path="about" element = {<AboutMe />} />
          <Route path="portfolio" element = {<MyPortfolio />} />
      </Routes>
      <CenterPage/> 

    </BrowserRouter>
  )
}

export default App
