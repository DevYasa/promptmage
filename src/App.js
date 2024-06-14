// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GeneratePage from './pages/GeneratePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
