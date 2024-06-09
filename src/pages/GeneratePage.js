// src/pages/GeneratePage.js
import React from 'react';
import styled from 'styled-components';
import previewImage from '../assets/images/ai_gen.png'; // Ensure this image path is correct

const GeneratePage = () => {
  return (
    <PageContainer>
      <Title>Generate Your Image</Title>
      <Form>
        <TextField type="text" placeholder="Enter your text here..." />
        <PreviewBox>
          <PreviewImage src={previewImage} alt="Preview" />
        </PreviewBox>
        <GenerateButton>Generate</GenerateButton>
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
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const TextField = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  width: 70%;
  margin-bottom: 2rem;
  text-align: center;

  &::placeholder {
    color: #fff;
  }
`;

const PreviewBox = styled.div`
  width: 70%;
  height: 300px;
  border: 2px solid #fff;
  border-radius: 50px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50px;
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
`;

export default GeneratePage;
