import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.tagline}>
          "Keluarga adalah harta yang paling berharga."
        </p>
        <div className={styles.divider}></div>
      </div>
    </footer>
  );
};

export default Footer;
