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

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <Nav>
      <Logo src={promptLogo} alt="PromptMage Logo" onClick={handleLogoClick} />
      <NavMenu>
        <NavButton onClick={() => handleNavClick('/')}>Home</NavButton>
        <NavButton onClick={() => handleNavClick('/contact')}>Contact</NavButton>
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

const NavButton = styled.button`
  color: #fff;
  background-color: #28a745;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &:last-child {
    background-color: transparent;
    border: 2px solid #fff;

    &:hover {
      background-color: #5a59a8;
    }
  }
`;

export default Header;
