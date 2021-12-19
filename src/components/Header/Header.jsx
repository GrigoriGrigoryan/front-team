import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import BtnsLanguages from '../BtnsLanguages/btnsLanguages';
import PropTypes from 'prop-types';
import logo from './../../assets/images/logo.png';
import './Header.css';

const messages = {
  homeMsg: 'homeID',
  mapMsg: 'mapID',
  articlesMsg: 'articlesID',
  garbageLibraryMsg: 'garbageLibraryID',
};

const Header = (props) => {
  const intl = useIntl();
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/';
  };
  const [expanded, setExpanded] = useState(false);
  const setNavExpanded = (expanded) => {
    setExpanded(expanded);
  };
  return (
    <Navbar
      onToggle={setNavExpanded}
      expanded={expanded}
      className={`m-0 ${styles.navbarWrapper}`}
      expand='md'
      variant='dark'
    >
      <div className={`d-flex justify-content-between container ${styles.navbarContainer}`}>
        <Navbar.Brand onClick={() => setNavExpanded(false)} as={Link} to='/' className='d-block'>
          <img src={logo} alt='logo' className={styles.logo} />
        </Navbar.Brand>
        <div className='toggleNav'>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            className={`toggleIcon ${expanded ? 'activeIcon' : ''} `}
          >
            <div className='line firstLine'></div>
            <div className='line secondLine'></div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id='basic-navbar-nav' className={styles.navbarCollapse}>
          <Nav className={`${styles.pagesWrapper}`}>
            <NavLink
              onClick={() => setNavExpanded(false)}
              to='/'
              className={styles.linkWrapper}
              activeClassName={styles.active}
              isActive={checkActive}
            >
              {intl.formatMessage({ id: messages.homeMsg })}
            </NavLink>
            <NavLink
              onClick={() => setNavExpanded(false)}
              to='/map'
              className={styles.linkWrapper}
              activeClassName={styles.active}
            >
              {intl.formatMessage({ id: messages.mapMsg })}
            </NavLink>
            <NavLink
              onClick={() => setNavExpanded(false)}
              to='/articles'
              className={styles.linkWrapper}
              activeClassName={styles.active}
            >
              {intl.formatMessage({ id: messages.articlesMsg })}
            </NavLink>
            <NavLink
              onClick={() => setNavExpanded(false)}
              to='/garbageLibrary'
              className={styles.linkWrapper}
              activeClassName={styles.active}
            >
              {intl.formatMessage({ id: messages.garbageLibraryMsg })}
            </NavLink>
          </Nav>
          <BtnsLanguages localeHandler={props.localeHandler} currentLang={props.currentLang} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

Header.propTypes = {
  localeHandler: PropTypes.func,
  currentLang: PropTypes.string,
};

export default Header;
