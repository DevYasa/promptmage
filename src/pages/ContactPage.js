import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import contactImage from '../assets/images/conta.png';
import useWindowSize from '../hooks/useWindowSize';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { width } = useWindowSize();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      console.log('Response:', response.data);
      alert('Contact information saved successfully.');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the contact form.');
    }
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
      {width > 768 && (
        <ImageContainer>
          <ContactImage src={contactImage} alt="Contact Us" />
        </ImageContainer>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 6.5rem;
  margin-bottom: 9rem;
  height: 60vh;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 3.5rem;
  padding-left: 3.5rem;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
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
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  height: 150px;
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

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 2rem;
  }
`;

const ContactImage = styled.img`
  margin-top: 5rem;
  max-width: 70%;
  height: auto;
  border-radius: 15px;
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default ContactPage;
