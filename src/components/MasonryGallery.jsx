import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';
import Lightbox from './Lightbox';

const PhotoCard = ({ photo, onClick }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotate: (photo.id % 2 === 0 ? -1 : 1) });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Magnetic pull calculation
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Limits the pull to a small range
    const pullX = distanceX * 0.15;
    const pullY = distanceY * 0.15;
    const rotate = (photo.id % 2 === 0 ? -1 : 1) + (distanceX * 0.01);
    
    setTransform({ x: pullX, y: pullY, rotate: rotate });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, rotate: (photo.id % 2 === 0 ? -1 : 1) });
  };

  return (
    <div 
      ref={cardRef}
      className={styles.photoCard}
      onClick={() => onClick(photo)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotate}deg)`
      }}
    >
      <div className={styles.imageWrapper}>
        <img 
          src={photo.url} 
          alt={photo.title} 
          className={styles.image} 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = photo.placeholder;
          }}
        />
      </div>
      <div className={styles.caption}>
        {photo.title}
      </div>
    </div>
  );
};

const photos = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  url: `/images/family-${i + 1}.jpeg`,
  placeholder: `https://images.unsplash.com/photo-${[
    '1542037104857-ffbb0b9155fb', '1491333078588-55b6733c7de6', '1476703993599-0035a21b17a9', '1511895426328-dc8714191300',
    '1502086223501-7ea6ecd79368', '1536640712247-c45474762ef4', '1520853502340-96d3de994391', '1535491740345-0d046c8254b9',
    '1444840535719-195841cb6e2b', '1510972527921-ce03766a1cf1', '1473644617525-5a49bf4aa9c4', '1484981138541-3d074aa97716',
    '1516733725897-1aa73b87c8e8', '1501238463702-0542ab7bcacc', '1504280390367-361c6d9f38f4', '1522067821637-6741697166f7',
    '1508807526345-15e9b5f4dc39', '1529156069898-49953e39b3ac', '1464306208223-e0b4495a5553', '1516627145497-ae6968895b74'
  ][i] || '1511895426328-dc8714191300'}?auto=format&fit=crop&w=800&q=80`,
  title: [
    'With Ayah Bunda', 'Pelukan Hangat', 'Tutup Tahun Bersama', 'Ulang Tahun Arlan',
    'Senyuman Manis', 'Liburan Bersama Ayah', 'Momen Belajar', 'Malam Tahun Baru',
    'Bunda with Cici', 'Kasih Sayang', 'Dunia Arlan', 'Mimpi Indah',
    'Nonton Bareng', 'Ibadah with Bunda', 'Masa Kecil Arlan', 'Masa Kecil Arlan',
    'Senyum Arlan', 'Kenangan Manis', 'Ulang Tahun Arlan di Masa Kecil', 'Cinta Abadi',
    'Momen Spesial', 'Kebahagiaan', 'Bunda', 'Senyum with Bunda di Masa Kecil',
    'Detik Berharga', 'Senyum yang Penuh Manis', 'Cerita Kita', 'Selamanya'
  ][i] || `Kenangan ${i + 1}`
}));

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className="container">
        <h2 className={styles.sectionTitle}>Album Kenangan</h2>
        <div className={styles.masonry}>
          {photos.map((photo) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              onClick={setSelectedImage} 
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <Lightbox 
          photo={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  );
};

export default MasonryGallery;
