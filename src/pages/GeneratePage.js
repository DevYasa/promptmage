// src/pages/GeneratePage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import Typewriter from '../components/TypeWriter';
import previewImage from '../assets/images/ai_gen.png';

const GeneratePage = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/generate-image', {
        prompt: inputText,
      });
      console.log('Response from backend:', response.data);

      const fullImageUrl = `http://localhost:3001${response.data.image_url}`;
      setGeneratedImage(fullImageUrl);
      console.log('Generated Image URL:', fullImageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'generated_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <PageContainer>
      <Title>Generate Your Image</Title>
      <Form>
        <TextFieldContainer>
          {!inputText && (
            <TypewriterText>
              <Typewriter text="Enter your text here..." />
            </TypewriterText>
          )}
          <TextField
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </TextFieldContainer>
        <PreviewBox>
          {loading ? (
            <LoadingText>Loading...</LoadingText>
          ) : generatedImage ? (
            <PreviewImageContainer>
              <PreviewImage src={generatedImage} alt="Generated" onError={() => console.log('Failed to load image')} />
              <DownloadIcon onClick={handleDownloadClick}>
                <FaDownload />
              </DownloadIcon>
            </PreviewImageContainer>
          ) : (
            <PreviewImage src={previewImage} alt="Preview" />
          )}
        </PreviewBox>
        <GenerateButton type="button" onClick={handleGenerateClick}>
          Generate
        </GenerateButton>
      </Form>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-size: cover;
  background-position: center;
  color: #fff;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
  width: 70%;
  margin-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TypewriterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  color: #fff;
  font-size: 1rem;
`;

const TextField = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  width: 100%;
  text-align: center;
`;

const PreviewBox = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #fff;
  border-radius: 60px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
`;

const PreviewImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 60px;

  @media (max-width: 768px) {
    border-radius: 30px;
  }
`;

const DownloadIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const LoadingText = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;

const GenerateButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 6rem;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    margin-bottom: 4rem;
  }
`;

export default GeneratePage;
