// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import robotImage from '../assets/images/her_img.png'; // Ensure this image path is correct
import { flicker } from '../styles/GlobalStyles'; // Import the flicker animation

const Hero = () => {
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
          <ExploreButton primary>Explore Now</ExploreButton>
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
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 650px; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-right: 1rem; /* Reduce this value to decrease the gap */
`;

const Title = styled.h1`
  font-size: 9.5rem; /* Adjust as needed */
  margin: 0;
  font-family: 'Alpha', sans-serif;
  line-height: 0.6; /* Adjust this value to reduce space between lines */
  text-align: left;

  .welcome {
    display: inline-block;
    transform: translateX(8%); /* Move the welcome text slightly to the right */
  }

  .highlight {
    font-size: 6rem;
    font-family: 'AristaPro', sans-serif;
    display: inline-block;
    transform: translateX(10%); }
`;

const Subtitle = styled.p`
  font-size: 1.8rem; /* Adjust as needed */
  margin: 3rem 0 1rem; /* Adjust the top margin to create space */
  text-align: left;
  transform: translateX(32%);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1.5rem;
  transform: translateX(40%);
`;

const ExploreButton = styled.button`
  padding: 0.75rem 1.5rem;
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
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Move image to the right */
  align-items: center;
  padding-left: 0rem; /* Reduce this value to decrease the gap */
`;

const HeroImage = styled.img`
  max-width: 80%; /* Adjust this value to reduce the gap */
  height: auto;
  animation: ${flicker} 1.5s infinite; /* Apply the flicker animation */
`;

export default Hero;
