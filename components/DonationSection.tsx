import React from 'react';
import { FadeInSection } from './FadeInSection';

export const DonationSection: React.FC = () => {
  const pixKey = "augustodepaulabezerra@gmail.com";
  // Gerando QR Code simples contendo a chave (texto)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${pixKey}`;

  return (
    <section id="doacao" className="py-16 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-baturite-blue via-baturite-yellow to-baturite-blue"></div>
      
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-baturite-blue mb-4">
              Faça Parte Dessa História
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sua contribuição é o combustível para essa jornada. Escaneie o QR Code ou use a chave Pix abaixo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            {/* Coluna Visual / QR Code */}
            <div className="md:w-5/12 bg-baturite-blue p-8 flex flex-col items-center justify-center text-center text-white relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              
              <h3 className="text-xl font-bold mb-6 relative z-10">Escaneie para Apoiar</h3>
              
              <div className="bg-white p-4 rounded-xl shadow-lg mb-6 relative z-10 transform transition-transform hover:scale-105">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code Pix" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>
              
              <p className="text-sm text-blue-100 relative z-10">
                <i className="fa-solid fa-mobile-screen-button mr-2"></i>
                Abra o app do seu banco
              </p>
            </div>

            {/* Coluna de Dados */}
            <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Chave Pix (E-mail)
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-grow bg-white border-2 border-gray-200 text-gray-800 text-lg font-mono font-bold p-4 rounded-lg break-all flex items-center">
                    {pixKey}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  * Confira os dados antes de confirmar: Augusto de Paula Bezerra
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-baturite-yellow p-4 rounded-r-lg">
                <div className="flex items-start">
                  <i className="fa-solid fa-heart text-baturite-yellow mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Todo valor faz a diferença!</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Recursos serão usados para passagens, hospedagem e alimentação em Houston.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};