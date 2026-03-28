import React from 'react';
import LandingPage from './LandingPage';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <LandingPage />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
