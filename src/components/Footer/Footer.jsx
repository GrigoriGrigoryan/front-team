import React from 'react';
import styles from './Footer.module.css';
import copyrightSign from './../../assets/images/copyright.png'; // with import

const Footer = () => {
    return (
        <div className={`text-center ${styles.footer}`}>
            <img src={copyrightSign} alt="copyr" className={styles.copyrImg}/>
            <span className={styles.footerText}>Green Team, 2021</span>
        </div>
    );
};

export default Footer;