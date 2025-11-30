import React, { useState } from 'react';
import { FadeInSection } from './FadeInSection';

export const About: React.FC = () => {
  const [shareText, setShareText] = useState("Compartilhar essa Missão");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Baturité na Copernicus 🚀',
      text: 'Ajude o Augusto a representar o Brasil na Copernicus Olympiad em Houston!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      // Fallback para computadores (copiar link)
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareText("Link Copiado!");
        setIsCopied(true);
        setTimeout(() => {
          setShareText("Compartilhar essa Missão");
          setIsCopied(false);
        }, 3000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-baturite-blue mb-6">
                De Baturité para o Mundo!
              </h2>
              
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Eu sou o Augusto e conquistei uma <strong className="text-baturite-blue">Medalha de Bronze na Olimpíada Internacional de Ciências – Copernicus Natural Science!</strong>
                </p>
                <p>
                  Um sonho realizado que me rendeu um convite sensacional: <strong>Vou representar o Brasil na Copernicus Global Round 2026 em Houston, Texas (EUA), em janeiro!</strong>
                </p>
                <p>
                  Essa não é só uma olimpíada; é o palco máximo da Ciência para estudantes. A Copernicus me dará a chance de testar meu conhecimento multidisciplinar e mostrar que a educação na rede municipal de Baturité pode brilhar no mundo!
                </p>
                <p className="italic border-l-4 border-baturite-yellow pl-4 py-2 bg-yellow-50 rounded-r">
                  "Quero que minha história inspire cada criança a acreditar que o estudo e a dedicação nos levam a lugares inimagináveis."
                </p>
                <p>
                  A vaga está garantida, mas a viagem só acontece com a ajuda de vocês! Para representar nossa cidade e nosso país em Houston, preciso arrecadar recursos para as despesas (passagens, hospedagem e inscrição).
                </p>
                <p className="font-medium text-baturite-blue">
                  Se você puder me dar qualquer forcinha, você estará investindo em um futuro feito de Ciência e muito orgulho! Vamos nessa!
                </p>
              </div>

              {/* Botão de Compartilhar */}
              <div className="mt-8">
                <button
                  onClick={handleShare}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full font-bold border-2 transition-all duration-300 shadow-md ${
                    isCopied 
                      ? "bg-green-100 border-green-500 text-green-700" 
                      : "bg-white border-baturite-blue text-baturite-blue hover:bg-baturite-blue hover:text-white"
                  }`}
                >
                  <i className={`fa-solid ${isCopied ? "fa-check" : "fa-share-nodes"} text-xl transition-transform group-hover:scale-110`}></i>
                  {shareText}
                </button>
              </div>
            </div>

            {/* Instagram Reel Embed */}
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-[350px] mx-auto">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-baturite-yellow/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                
                {/* Video Container */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black border border-gray-100 z-10">
                  <iframe 
                    src="https://www.instagram.com/reel/DRfF7fMEUIl/embed" 
                    className="w-full aspect-[9/16] object-cover block" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowTransparency={true}
                    allow="encrypted-media"
                    title="Augusto no Instagram"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};