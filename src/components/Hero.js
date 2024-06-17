// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import robotImage from '../assets/images/her.png'; // Ensure this image path is correct
import { flicker } from '../styles/GlobalStyles'; // Import the flicker animation

// Define the keyframes for the enter animation
const enterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreNowClick = () => {
    navigate('/generate');
  };

  return (
    <HeroSection>
      <TextContainer>
        <Title>
          <span className="welcome">WELCOME TO</span> <span className="highlight">promptmage</span>
        </Title>
        <Subtitle>
          Generate stunning images
          <br></br>
          from your text prompts
        </Subtitle>
        <ButtonContainer>
          <ExploreButton primary onClick={handleExploreNowClick}>Explore Now</ExploreButton>
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <HeroImage src={robotImage} alt="Robot" />
      </ImageContainer>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  padding: 1rem;
  padding-bottom: 2.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 800px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-right: 0rem; /* Reduce this value to decrease the gap */

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 11rem; /* Adjust as needed */
  margin: 0;
  font-family: 'Alpha', sans-serif;
  line-height: 0.5; /* Adjust this value to reduce space between lines */
  text-align: left;
  animation: ${enterAnimation} 1s ease-out; /* Apply the animation */

  .welcome {
    display: inline-block;
    transform: translateX(8%); /* Move the welcome text slightly to the right */
  }

  .highlight {
    font-size: 6.5rem;
    font-family: 'AristaPro', sans-serif;
    display: inline-block;
    transform: translateX(10%);
  }

  @media (max-width: 768px) {
    font-size: 5rem; /* Adjust as needed */
    text-align: center;

    .highlight {
      font-size: 4rem;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 2rem; /* Adjust as needed */
  margin: 4rem 0 1rem; /* Adjust the top margin to create space */
  text-align: left;
  transform: translateX(32%);
  position: relative;

  &::before {
    content: '→'; /* Arrow symbol */
    font-size: 3rem; /* Adjust as needed */
    color: #28a745; /* Arrow color */
    position: absolute;
    left: -4rem; /* Adjust this value to position the arrow */
    top: 20%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust as needed */
    text-align: center;
    transform: translateX(0);

    &::before {
      display: none; /* Hide the arrow on mobile */
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1.5rem;
  transform: translateX(40%);

  @media (max-width: 768px) {
    justify-content: center;
    transform: translateX(0);
  }
`;

const ExploreButton = styled.button`
  padding: 1rem 1.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745; /* Adjust to the desired color */
  border: none;
  border-radius: 25px; /* Rounded corners */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838; /* Darker shade on hover */
  }

  &:after {
    content: '→'; /* Arrow symbol */
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Move image to the right */
  align-items: center;
  padding-left: 0rem; /* Reduce this value to decrease the gap */

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
  }
`;

const HeroImage = styled.img`
  max-width: 90%; /* Adjust this value to reduce the gap */
  height: auto;
  animation: ${flicker} 1.2s infinite; /* Apply the flicker animation */
  position: relative; /* Ensure the pseudo-element is positioned correctly */

  &::after {
    content: '';
    position: absolute;
    top: 20%; /* Adjust to position the light effect */
    left: 20%; /* Adjust to position the light effect */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    pointer-events: none; /* Ensure the light effect does not interfere with mouse events */
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Hero;
