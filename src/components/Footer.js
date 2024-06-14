// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 PromptMage. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: #fff;
`;

export default Footer;
