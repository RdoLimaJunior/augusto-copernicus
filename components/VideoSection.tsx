import React from 'react';
import { FadeInSection } from './FadeInSection';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-baturite-blue text-white text-center">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-8">Conheça Nossa História</h2>
          <div className="max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-baturite-yellow relative">
            <iframe 
              className="w-full aspect-video h-[250px] md:h-[500px]" 
              src="https://www.youtube.com/embed/WINB_BQDMbo?rel=0" 
              title="Baturité na Copernicus" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};