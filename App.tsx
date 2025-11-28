import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DonationSection } from './components/DonationSection';
import { Financials } from './components/Financials';
import { VideoSection } from './components/VideoSection';
import { ROI } from './components/ROI';
import { Footer } from './components/Footer';
import { FloatingButton } from './components/FloatingButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <DonationSection />
        <Financials />
        <VideoSection />
        <ROI />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default App;