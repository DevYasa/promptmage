// src/pages/ContactPage.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import contactImage from '../assets/images/conta.png'; // Make sure the path to your image is correct

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <PageContainer>
      <FormContainer>
        <FormTitle>Contact Us</FormTitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <FaUser className="icon" />
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <FaEnvelope className="icon" />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <FaPhone className="icon" />
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <FaPaperPlane className="icon icon-message" />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ContactImage src={contactImage} alt="Contact Us" />
      </ImageContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 1rem;
  margin-bottom: 3.5rem;
  height: auto;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 10px;
    color: #fff;
  }

  .icon-message {
    top: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  height: 120px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
  align-self: center;

  &:hover {
    background-color: #218838;
  }
`;

// Define the pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  padding-top: 7rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-left: 0;
  }
`;

const ContactImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 15px;
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default ContactPage;
