import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import MasonryGallery from './components/MasonryGallery';
import About from './components/About';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import FallingPetals from './components/FallingPetals';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // Only run intersection observer after splash screen is gone
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    }
  }, [loading]);

  return (
    <div className="app">
      <CustomCursor />
      <FallingPetals />
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Hero />
          <About />
          <Timeline />
          <MasonryGallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
