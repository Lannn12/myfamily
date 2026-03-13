import React from 'react';
import styles from '../styles/FallingPetals.module.css';

const FallingPetals = () => {
  // Create 15-20 petals with random properties
  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 15}s`, // 15s to 25s for slow falling
    animationDelay: `${Math.random() * 15}s`,
    size: `${Math.random() * 15 + 10}px`, // 10px to 25px
    opacity: Math.random() * 0.4 + 0.2, // 0.2 to 0.6 opacity
    rotation: `${Math.random() * 360}deg`,
  }));

  return (
    <div className={styles.container}>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={styles.petal}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
            transform: `rotate(${petal.rotation})`,
          }}
        >
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480
              c-123.71,0-224-100.29-224-224S132.29,32,256,32s224,100.29,224,224S379.71,480,256,480z"/>
            <path d="M256,128c-70.69,0-128,57.31-128,128s57.31,128,128,128s128-57.31,128-128S326.69,128,256,128z M256,352
              c-53.02,0-96-42.98-96-96s42.98-96,96-96s96,42.98,96,96S309.02,352,256,352z"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
