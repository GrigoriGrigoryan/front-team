/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SetStateAction, useState } from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MSG } from '../../messages/NavbarMsg';
import Logo from '../../assets/images/logo.png';
import './NavigationBar.css';

const NavigationBar: React.FC = (): JSX.Element => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [activeNav, setActiveNav] = useState('default');
  return (
    <Navbar
      className="navbar"
      variant="dark"
      collapseOnSelect
      expand="md"
      fixed="top"
      onToggle={() => setIsActiveNav(!isActiveNav)}
    >
      <Navbar.Brand
        className="nav-left"
        as={Link}
        to="/"
        href="/"
        onClick={() => setActiveNav('default')}
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
        <Nav
          className="justify-content-end nav-right"
          style={{ width: '100%' }}
          activeKey={activeNav}
          onSelect={selectedKey => setActiveNav(selectedKey as string)}
        >
          <Nav.Link
            eventKey="default"
            as={Link}
            to="/"
            href="/"
            className="linkWrapper"
          >
            Home
          </Nav.Link>
          <Nav.Link
            eventKey="map"
            as={Link}
            to="/map"
            href="/map"
            className="linkWrapper"
          >
            Map
          </Nav.Link>
          <Nav.Link
            eventKey="articles"
            as={Link}
            to="/articles"
            href="/articles"
            className="linkWrapper"
          >
            Articles
          </Nav.Link>
          <Nav.Link
            eventKey="garbageLibrary"
            as={Link}
            to="/garbageLibrary"
            href="/garbageLibrary"
            className="linkWrapper"
          >
            Garbage library
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
