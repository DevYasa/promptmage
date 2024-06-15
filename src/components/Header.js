// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import promptLogo from '../assets/images/prompt.png';
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();

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
      {width <= 768 && <MobileNav />}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0rem 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 90px; /* Adjust as needed */
  cursor: pointer; /* Add pointer cursor */

  @media (max-width: 768px) {
    height: 70px;
    margin-bottom: 0.5rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.3rem 1rem;
    font-size: 0.9rem;
  }
`;

const MobileNav = styled.div`
  /* Add any additional styles for the mobile nav here */
`;

export default Header;
