import React from 'react';
import { FadeInSection } from './FadeInSection';

export const ROI: React.FC = () => {
  const cards = [
    {
      icon: "fa-earth-americas",
      title: "Visibilidade Global",
      description: "Sua marca associada a um projeto internacional de educação e ciência."
    },
    {
      icon: "fa-graduation-cap",
      title: "Legado Educacional",
      description: "Incentivo direto para outros jovens da rede pública de ensino."
    },
    {
      icon: "fa-bullhorn",
      title: "Mídia Espontânea",
      description: "Divulgação em jornais locais, redes sociais e eventos da escola."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-baturite-blue mb-12">
            Por que Apoiar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gray-50">
                <div className="w-20 h-20 bg-baturite-yellow rounded-full flex items-center justify-center mb-6 shadow-md text-baturite-blue">
                  <i className={`fa-solid ${card.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};