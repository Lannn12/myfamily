import React from 'react';
import styles from '../styles/Timeline.module.css';

const timelineData = [
  {
    stage: "Masa Kecil",
    title: "Awal Perjalanan",
    message: "Terima kasih Ayah dan Bunda sudah membimbing Arlan sejak kecil dengan penuh kasih sayang. Setiap tawa dan tangis Arlan selalu ada pelukan hangat kalian.",
    alignment: "left"
  },
  {
    stage: "Sekolah Dasar (SD)",
    title: "Belajar Mandiri",
    message: "Di masa SD, Ayah dan Bunda selalu sabar mengajari Arlan membaca dan menulis. Dukungan kalian membuat Arlan semangat untuk terus belajar hal baru.",
    alignment: "right"
  },
  {
    stage: "Sekolah Menengah Pertama (SMP)",
    title: "Masa Pertumbuhan",
    message: "Terima kasih sudah menjadi teman berbagi cerita di masa SMP. Ayah dan Bunda selalu memberikan nasihat terbaik saat Arlan mulai mengenal dunia lebih luas.",
    alignment: "left"
  },
  {
    stage: "Sekolah Menengah Atas (SMA)",
    title: "Mengejar Impian",
    message: "Masa SMA penuh dengan tantangan, tapi doa Ayah dan Bunda selalu menjadi kekuatan Arlan untuk melangkah maju dan tidak pantang menyerah.",
    alignment: "right"
  },
  {
    stage: "Perkuliahan",
    title: "Masa Depan",
    message: "Sekarang di bangku kuliah, Arlan ingin membuktikan bahwa kerja keras Ayah dan Bunda tidak sia-sia. Arlan akan terus berjuang demi membahagiakan kalian.",
    alignment: "left"
  }
];

const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Perjalanan Kasih Sayang</h2>
        <div className={styles.timelineContainer}>
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${item.alignment === 'left' ? styles.left : styles.right}`}
            >
              <div className={styles.content}>
                <span className={styles.date}>{item.stage}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>"{item.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
