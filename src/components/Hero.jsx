import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState('');
  const fullText = "Semoga Arlan bisa menjadi anak yang membanggakan Bunda dan Ayah.";
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Typewriter effect
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={styles.hero}>
      {/* Parallax Background */}
      <div 
        className={styles.parallaxBg} 
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.tagWrapper}>
          <span className={styles.miniTag}>Keluarga Kami</span>
        </div>
        <h1 className={styles.title}>Kenangan Harmonis</h1>
        <p className={styles.subtitle}>
          "{text}"<span className={styles.cursor}>|</span>
        </p>
        <div className={styles.divider}></div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <p className={styles.scrollText}>Gulir Untuk Melihat</p>
        </div>
      </div>

      {/* Background Particles Decoration */}
      <div className={styles.particles}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
