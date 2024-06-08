// src/styles/GlobalStyles.js
import { createGlobalStyle, keyframes } from 'styled-components';

// Define the keyframes for the flicker animation
const flicker = keyframes`
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.8; transform: translateY(-2px); }
  25%, 75% { opacity: 0.9; transform: translateY(1px); }
`;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Alpha';
    src: url('/fonts/Alpha.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'AristaPro';
    src: url('/fonts/AristaPro.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif; /* Default font */
    background: url('/bg_img.png') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #ffffff;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-container {
    width: 100%;
    max-width: 1200px; /* Adjust as needed */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { GlobalStyles, flicker };
