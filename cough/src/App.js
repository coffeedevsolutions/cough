import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Essays from './components/essays';
import Home from './components/home';
import Projects from './components/projects';
import Taste from './components/taste';
//essays
import WorkLifeBalance from './components/essayContent/work-life-balance';

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/taste" element={<Taste />} />
        <Route path="/essays/work-life-balance" element={<WorkLifeBalance />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
