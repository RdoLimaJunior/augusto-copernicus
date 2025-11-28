import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-baturite-blue shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-montserrat font-bold text-lg md:text-xl tracking-wide cursor-pointer">
              BATURITÉ NA NASA
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#sobre" 
              className="text-white/90 hover:text-baturite-yellow font-medium text-sm transition-all duration-300 hover:-translate-y-1 inline-block"
            >
              A História
            </a>
            <a 
              href="#financeiro" 
              className="text-white/90 hover:text-baturite-yellow font-medium text-sm transition-all duration-300 hover:-translate-y-1 inline-block"
            >
              Transparência
            </a>
          </nav>
        </div>

        <div className="relative group">
          {/* Efeito de brilho pulsante (Glow) */}
          <div className="absolute -inset-1 bg-baturite-yellow/60 rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <a 
            href="#doacao" 
            className="relative z-10 bg-baturite-yellow text-baturite-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300 text-sm md:text-base shadow-md block"
          >
            APOIAR AGORA
          </a>
        </div>
      </div>
    </header>
  );
};