import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from "react-bootstrap";
import { useIntl } from 'react-intl';
import BtnsLanguages from "../BtnsLanguages/btnsLanguages";
import PropTypes from "prop-types";

const messages = {
    // the ID of hello world message is 'helloWorldID'
    // the SAME as in the messages folder
    homeMsg: 'homeID',
    mapMsg: 'mapID',
    articlesMsg: 'articlesID',
    garbageLibraryMsg: 'garbageLibraryID'
};
const Header = (props) => {

    const intl = useIntl();
    return (
        <Navbar className={`m-0 ${styles.navbarWrapper}`}>
            <div className={`d-flex justify-content-between ${styles.navbarContainer}`}>
                <Navbar.Brand as={Link} to="/" className='d-block'>Recycling</Navbar.Brand>
                <Nav className={`${styles.pagesWrapper} me-auto`}>
                    <Nav.Link as={Link} to="/">{intl.formatMessage({ id: messages.homeMsg })}</Nav.Link>
                    <Nav.Link as={Link} to="/map">{intl.formatMessage({ id: messages.mapMsg })}</Nav.Link>
                    <Nav.Link as={Link} to="/articles">{intl.formatMessage({ id: messages.articlesMsg })}</Nav.Link>
                    <Nav.Link as={Link} to="/garbageLibrary">{intl.formatMessage({ id: messages.garbageLibraryMsg })}</Nav.Link>
                </Nav>
                <BtnsLanguages localeHandler={props.localeHandler} />
            </div>
        </Navbar>
    );
};

Header.propTypes = {
    localeHandler: PropTypes.func,
};

export default Header;