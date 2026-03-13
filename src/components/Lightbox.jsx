import React, { useEffect } from 'react';
import styles from '../styles/Lightbox.module.css';

const Lightbox = ({ photo, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className={styles.wrapper} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose}>&times;</button>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <img src={photo.url} alt={photo.title} className={styles.fullImage} />
        <div className={styles.caption}>
          <h3 className={styles.title}>{photo.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
