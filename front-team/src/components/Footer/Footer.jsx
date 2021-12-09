import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`text-center ${styles.footer}`}>
            ⓒGreenTeam, 2021
        </div>
    );
};

export default Footer;