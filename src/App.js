// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyles} from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactPage from './pages/ContactPage';
import GeneratePage from './pages/GeneratePage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/generate" element={<GeneratePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
