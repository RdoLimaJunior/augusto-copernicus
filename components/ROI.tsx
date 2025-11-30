import React from 'react';
import { FadeInSection } from './FadeInSection';

export const ROI: React.FC = () => {
  const cards = [
    {
      icon: "fa-flag",
      title: "Marco Inédito na História",
      description: "Pela primeira vez, um aluno da rede municipal levará a bandeira de Baturité para uma competição científica na NASA. Estamos colocando nossa cidade no mapa da ciência mundial!"
    },
    {
      icon: "fa-school",
      title: "Vitória da Escola Pública",
      description: "Essa conquista prova a excelência e o potencial da nossa educação municipal. É a confirmação de que, com apoio e dedicação, nossos alunos podem competir de igual para igual com o mundo."
    },
    {
      icon: "fa-door-open",
      title: "Abrindo Portas para o Futuro",
      description: "O Augusto é apenas o primeiro. Sua jornada servirá de farol para inspirar centenas de outras crianças de Baturité a acreditarem nos estudos e a sonharem cada vez mais alto."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-baturite-blue mb-4">
              Por que Apoiar?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Muito mais do que uma viagem, seu apoio constrói um legado para nossa comunidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gray-50 group border border-transparent hover:border-gray-100">
                <div className="w-20 h-20 bg-baturite-yellow rounded-full flex items-center justify-center mb-6 shadow-md text-baturite-blue group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${card.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};