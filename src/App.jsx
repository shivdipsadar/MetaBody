import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import MeetTheTeam from './components/MeetTheTeam';
import FeaturedClasses from './components/FeaturedClasses';
import StatsStrip from './components/StatsStrip';
import MembershipPlans from './components/MembershipPlans';
import Footer from './components/Footer';
import SmoothFollower from './components/SmoothFollower';
import Loader from './components/Loader';
import './components/Loader.css';

import heroImage from './assets/hero.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 6400; // 6.4 seconds
    const start = Date.now();

    const img = new Image();
    img.src = heroImage;

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = MIN_DURATION - elapsed;

      if (remaining > 0) {
        setTimeout(() => setIsLoading(false), remaining);
      } else {
        setIsLoading(false);
      }
    };

    // If image loads quickly
    if (img.complete) {
      finishLoading();
    } else {
      img.onload = finishLoading;

      // Fallback: force continue after 6.4s even if image is still not loaded
      setTimeout(() => {
        if (isLoading) setIsLoading(false);
      }, MIN_DURATION);
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="font-sans">
      <SmoothFollower />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <MeetTheTeam />
      <FeaturedClasses />
      <StatsStrip />
      <MembershipPlans />
      <Footer />
    </div>
  );
}

export default App;
