// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import promptLogo from '../assets/images/prompt.png';

const Header = () => {
  return (
    <Nav>
      <Logo src={promptLogo} alt="PromptMage Logo" /> {/* Update the logo path */}
      <NavMenu>
        <NavItem href="#">Login</NavItem>
        <NavItem href="#">Sign Up</NavItem>
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
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #3c3b8b;
  border-radius: 5px;
  &:hover {
    background-color: #5a59a8;
  }
`;

export default Header;
