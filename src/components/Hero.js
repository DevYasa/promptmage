// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import robotImage from '../assets/images/her.png'; // Ensure this image path is correct
import { flicker } from '../styles/GlobalStyles'; // Import the flicker animation

const Hero = () => {
  return (
    <HeroSection>
      <TextContainer>
        <Title>
          WELCOME TO <span className="highlight">promptmage</span>
        </Title>
        <Subtitle>
          Generate stunning images
          <br></br>
          from your text prompts
        </Subtitle>
        <ButtonContainer>
          <Button primary>Explore Now</Button>
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
  padding: 2rem;
  width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px; /* Adjust as needed */
`;

const Title = styled.h1`
  font-size: 9.6rem; /* Adjust as needed */
  margin: 0;
  font-family: 'Alpha', sans-serif;
  line-height: 0.6; /* Adjust this value to reduce space between lines */

  .highlight {
    font-size: 6.8rem;
    font-family: 'AristaPro', sans-serif;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem; /* Adjust as needed */
  margin: 1rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) => (props.primary ? '#3c3b8b' : '#5a59a8')};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#5a59a8' : '#3c3b8b')};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  max-width: 70%;
  height: auto;
  animation: ${flicker} 1.5s infinite; /* Apply the flicker animation */
`;

export default Hero;
