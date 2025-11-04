import React from 'react';
import Hero from './components/Hero';
import Studios from './components/Studios';
import WorkShowcase from './components/WorkShowcase';
import AboutJournal from './components/AboutJournal';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <Studios />
      <WorkShowcase />
      <AboutJournal />
      <FooterCTA />
    </div>
  );
}
