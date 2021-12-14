import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import BtnsLanguages from '../BtnsLanguages/btnsLanguages';
import PropTypes from 'prop-types';
import logo from './../../assets/images/logo.png';

const messages = {
  homeMsg: 'homeID',
  mapMsg: 'mapID',
  articlesMsg: 'articlesID',
  garbageLibraryMsg: 'garbageLibraryID',
};

const Header = (props) => {
  const intl = useIntl();
  return (
    <Navbar className={`m-0 ${styles.navbarWrapper}`} expand='md' variant='dark'>
      <div className={`d-flex justify-content-between container ${styles.navbarContainer}`}>
        <Navbar.Brand as={Link} to='/' className='d-block'>
          <img src={logo} alt='logo' className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${styles.pagesWrapper}`}>
            <Nav.Link as={Link} to='/' className={styles.linkWrapper}>
              <span className={styles.navLink}>{intl.formatMessage({ id: messages.homeMsg })}</span>
            </Nav.Link>
            <Nav.Link as={Link} to='/map' className={styles.linkWrapper}>
              <span className={styles.navLink}>{intl.formatMessage({ id: messages.mapMsg })}</span>
            </Nav.Link>
            <Nav.Link as={Link} to='/articles' className={styles.linkWrapper}>
              <span className={styles.navLink}>{intl.formatMessage({ id: messages.articlesMsg })}</span>
            </Nav.Link>
            <Nav.Link as={Link} to='/garbageLibrary' className={styles.linkWrapper}>
              <span className={styles.navLink}>{intl.formatMessage({ id: messages.garbageLibraryMsg })}</span>
            </Nav.Link>
          </Nav>
          <BtnsLanguages localeHandler={props.localeHandler} />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

Header.propTypes = {
  localeHandler: PropTypes.func,
};

export default Header;
