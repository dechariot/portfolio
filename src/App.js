import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//IMPORT PAGES 
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
