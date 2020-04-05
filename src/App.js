import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//IMPORT PAGES 
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects}/>
    </Router>
  );
}

export default App;
