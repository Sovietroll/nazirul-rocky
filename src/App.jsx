import NavBar from './NavBar.jsx';
import './App.css';
import './NavBar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
