import React from 'react';
import { FadeInSection } from './FadeInSection';

export const VideoSection: React.FC = () => {
  const videoId = "WINB_BQDMbo";
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-16 bg-baturite-blue text-white text-center">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-8">Conheça Nossa História</h2>
          <div className="max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-baturite-yellow relative group">
            {/* Como o vídeo possui restrição de embed (Erro 153), usamos um link direto com thumbnail */}
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative w-full pt-[56.25%] cursor-pointer overflow-hidden group"
              aria-label="Assistir vídeo no YouTube"
            >
              <img 
                src={thumbnailUrl} 
                alt="Capa do vídeo da campanha" 
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Botão de Play Estilizado */}
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 mb-4 ring-4 ring-white/20">
                  <i className="fa-solid fa-play text-3xl text-white ml-1"></i>
                </div>
                <p className="font-bold text-lg md:text-xl uppercase tracking-wider text-white drop-shadow-md">
                  Assistir no YouTube
                </p>
                <p className="text-xs md:text-sm text-gray-200 mt-1 opacity-90">
                  (Vídeo abrirá em nova janela)
                </p>
              </div>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};