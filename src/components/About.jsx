import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=80" 
              alt="Tentang Kami" 
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Pesan Untuk Bunda & Ayah</h2>
            <div className={styles.divider}></div>
            <p className={styles.description}>
              "Terima kasih sudah selalu support Arlan dalam perkuliahan, terima kasih untuk cinta dan kasih sayangnya Bunda dan Ayah ke Arlan. Arlan bersyukur memiliki orang tua seperti kalian berdua."
            </p>
            <p className={styles.quote}>
              "I Love You, Bunda & Ayah."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
