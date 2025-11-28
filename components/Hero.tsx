import React from 'react';
import { FadeInSection } from './FadeInSection';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-baturite-blue/90 to-[#002a60]/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <FadeInSection>
          <div className="flex flex-col items-center">
            {/* Pulsing Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 backdrop-blur-sm px-4 py-2 rounded-full animate-pulse">
              <i className="fa-solid fa-triangle-exclamation text-baturite-yellow"></i>
              <span className="text-white font-bold text-sm tracking-wider uppercase">
                Prazo Limite: 05 de Dezembro
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
              LEVE A BANDEIRA DE <span className="text-baturite-yellow">BATURITÉ</span> PARA O MUNDO
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl font-light">
              Ajude o estudante Augusto a representar nossa cidade na Copernicus Olympiad no Space Center Houston (EUA) em Janeiro de 2026.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#doacao"
                className="bg-baturite-yellow text-baturite-blue font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-center"
              >
                <i className="fa-solid fa-hand-holding-dollar mr-2"></i> APOIAR AGORA
              </a>
              <a 
                href="#sobre"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-baturite-blue transition-all duration-300 text-center"
              >
                CONHECER O PROJETO
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce text-white/50">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};