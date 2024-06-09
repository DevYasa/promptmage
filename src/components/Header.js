// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import promptLogo from '../assets/images/prompt.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Nav>
      <Logo src={promptLogo} alt="PromptMage Logo" onClick={handleLogoClick} /> {/* Update the logo path */}
      <NavMenu>
        <NavItem href="#">Login</NavItem>
        <SignUpItem href="#">Sign Up</SignUpItem> {/* Updated */}
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 0.5rem;
`;

const Logo = styled.img`
  height: 90px; /* Adjust as needed */
  cursor: pointer; /* Add pointer cursor */
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;

const SignUpItem = styled(Button)`
  background-color: transparent; /* New color for Sign Up */
  border: 2px solid #fff; /* White border */
  &:hover {
    background-color: #5a59a8; /* New hover color for Sign Up */
  }
`;

export default Header;
