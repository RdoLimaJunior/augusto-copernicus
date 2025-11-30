import React from 'react';
import { FadeInSection } from './FadeInSection';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
        {/* Gradiente otimizado para contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-baturite-blue/95 via-baturite-blue/80 to-[#001a3d]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <FadeInSection>
          <div className="flex flex-col items-center">
            {/* Pulsing Badge */}
            <div className="mb-8 inline-flex items-center gap-2 bg-red-600/10 border border-red-500/40 backdrop-blur-md px-5 py-2 rounded-full animate-pulse shadow-glow-red">
              <i className="fa-solid fa-triangle-exclamation text-baturite-yellow"></i>
              <span className="text-white font-bold text-sm md:text-base tracking-wider uppercase drop-shadow-sm">
                Prazo Limite: 05 de Dezembro
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-5xl drop-shadow-lg">
              LEVE A BANDEIRA DE <span className="text-baturite-yellow relative inline-block">
                BATURITÉ
                {/* Efeito decorativo sutil sob o texto */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-baturite-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> PARA O MUNDO
            </h1>
            
            <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed">
              Ajude o estudante Augusto a representar nossa cidade na Copernicus Olympiad no Space Center Houston (EUA) em Janeiro de 2026.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#doacao"
                className="bg-baturite-yellow text-baturite-blue font-bold py-4 px-10 rounded-full shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-hand-holding-dollar"></i> APOIAR AGORA
              </a>
              <a 
                href="#sobre"
                className="border-2 border-white/80 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-baturite-blue transition-all duration-300 text-center backdrop-blur-sm"
              >
                CONHECER O PROJETO
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce text-white/40 hover:text-white transition-colors cursor-pointer">
        <a href="#sobre" aria-label="Rolar para baixo">
          <i className="fa-solid fa-chevron-down text-3xl"></i>
        </a>
      </div>
    </section>
  );
};