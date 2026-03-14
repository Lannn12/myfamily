import React, { useEffect, useState } from 'react';
import styles from '../styles/SplashScreen.module.css';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 800); // Wait for fade-out animation
    }, 4000); // Show splash for 4 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`${styles.splashContainer} ${!isVisible ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.line}></div>
        </div>
        <p className={styles.tagline}>Merangkai Kasih Sayang Dalam Setiap Detik</p>
        <div className={styles.loader}>
          <div className={styles.loaderBar}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
