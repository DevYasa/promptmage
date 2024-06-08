// src/App.js
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="main-container">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
