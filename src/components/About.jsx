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
            <h2 className={styles.title}>Tentang Keluarga Kami</h2>
            <div className={styles.divider}></div>
            <p className={styles.description}>
              Keluarga adalah tempat di mana cinta tak pernah berakhir dan kasih sayang selalu tumbuh subur. 
              Melalui website ini, kami ingin merangkai kembali setiap detik kebahagiaan, tawa, dan perjuangan 
              yang telah kami lalui bersama.
            </p>
            <p className={styles.description}>
              Bagi kami, setiap foto adalah sebuah cerita, dan setiap cerita adalah bagian tak terpisahkan 
              dari perjalanan hidup Arlan, Bunda, dan Ayah. Kami berharap kenangan ini dapat menjadi 
              inspirasi dan pengingat akan betapa berharganya arti sebuah keluarga.
            </p>
            <p className={styles.quote}>
              "Kebahagiaan terbesar adalah ketika kita bisa saling memiliki dan mendukung satu sama lain."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
