import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/header';
import Essays from './components/essays';
import Home from './components/home';
import Projects from './components/projects';
import Taste from './components/taste';
import Links from './components/links';
//essays
import WorkLifeBalance from './components/essayContent/work-life-balance';
import ChatgptCoding from './components/essayContent/chatgpt-coding';

function AppContent() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/taste" element={<Taste />} />
        <Route path="/links" element={<Links />} />
        <Route path="/essays/work-life-balance" element={<WorkLifeBalance />} />
        <Route path="/essays/chatgpt-coding" element={<ChatgptCoding />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  );
}

export default App;
