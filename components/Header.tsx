import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-baturite-blue/95 backdrop-blur-sm shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-montserrat font-bold text-lg md:text-xl tracking-wide cursor-pointer hover:text-baturite-yellow transition-colors">
              BATURITÉ NA COPERNICUS
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#sobre" 
              className="text-white/90 font-medium text-sm transition-all duration-200 hover:text-baturite-yellow hover:translate-y-1 inline-block"
            >
              A História
            </a>
            <a 
              href="#financeiro" 
              className="text-white/90 font-medium text-sm transition-all duration-200 hover:text-baturite-yellow hover:translate-y-1 inline-block"
            >
              Transparência
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group hidden md:block">
            {/* Efeito de brilho pulsante (Glow) */}
            <div className="absolute -inset-1 bg-baturite-yellow/60 rounded-full blur-md opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <a 
              href="#doacao" 
              className="relative z-10 bg-baturite-yellow text-baturite-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-400 hover:scale-105 transform transition-all duration-300 text-sm md:text-base shadow-md block"
            >
              APOIAR AGORA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none hover:text-baturite-yellow transition-colors p-2"
            aria-label="Abrir menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-baturite-blue border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <a 
            href="#sobre" 
            onClick={closeMenu}
            className="text-white font-medium hover:text-baturite-yellow transition-colors pl-2 border-l-4 border-transparent hover:border-baturite-yellow"
          >
            A História
          </a>
          <a 
            href="#financeiro" 
            onClick={closeMenu}
            className="text-white font-medium hover:text-baturite-yellow transition-colors pl-2 border-l-4 border-transparent hover:border-baturite-yellow"
          >
            Transparência
          </a>
          <a 
            href="#doacao" 
            onClick={closeMenu}
            className="bg-baturite-yellow text-baturite-blue font-bold py-3 px-4 rounded-lg text-center shadow hover:bg-yellow-400 transition-colors"
          >
            APOIAR AGORA
          </a>
        </nav>
      </div>
    </header>
  );
};