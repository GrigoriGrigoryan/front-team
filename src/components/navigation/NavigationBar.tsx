import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { LinkElement, LINKS } from '../../types/Links';
import LocaleButton from '../buttons/LocaleButton';
import DualNav from '../buttons/DualNav';
import Logo from '../../assets/images/logo.png';
import './NavigationBar.css';
import '../styles/Toggle.css';

const NavigationBar: React.FC = (): JSX.Element => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      className="navbar"
      variant="dark"
      collapseOnSelect
      expanded={isActiveNav}
      expand="lg"
      fixed="top"
      onToggle={() => setIsActiveNav(!isActiveNav)}
    >
      <Navbar.Brand
        className="brand-left"
        as={Link}
        to="/"
        href="/"
        onClick={() => setIsActiveNav(false)}
      >
        <img src={Logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <div className="toggleNav">
        <Navbar.Toggle
          className={`toggleIcon ${isActiveNav ? 'activeIcon' : ''} `}
        >
          <div className="line firstLine" />
          <div className="line secondLine" />
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navigationBar">
          <Container className="justify-content-start flex-nowrap left-container">
            {LINKS.map((link: LinkElement) => (
              <Nav.Link
                key={`link_${link.name}`}
                as={Link}
                to={`/${link.name}`}
                href={`/${link.name}`}
                className="navLink"
                active={location.pathname === `/${link.name}`}
              >
                {link.innerText}
              </Nav.Link>
            ))}
          </Container>

          <Container className="justify-content-end right-container">
            <DualNav
              left={{ text: 'log in', url: '/login' }}
              right={{ text: 'register', url: '/register' }}
            />
            <LocaleButton leftButton="EN" rightButton="RU" />
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
