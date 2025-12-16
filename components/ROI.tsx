import React from 'react';
import { FadeInSection } from './FadeInSection';

export const ROI: React.FC = () => {
  const cards = [
    {
      icon: "fa-earth-americas",
      title: "Um Marco Histórico",
      description: "Pela primeira vez na história, Baturité terá um representante em uma competição científica global na NASA. É o nome da nossa cidade sendo levado ao topo do mundo por um filho da terra."
    },
    {
      icon: "fa-graduation-cap",
      title: "Potência da Escola Pública",
      description: "Augusto prova que a educação municipal de Baturité forma talentos de nível internacional. Apoiar este projeto é valorizar nossos professores, nossas escolas e o potencial de nossas crianças."
    },
    {
      icon: "fa-rocket",
      title: "Abrindo Caminhos",
      description: "Essa conquista não é só dele. Ela abre portas e mostra para cada estudante de Baturité que sonhos grandes são possíveis. Estamos criando um legado de inspiração para as próximas gerações."
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
              Sua doação vai muito além da viagem: é um investimento no orgulho da nossa gente e no futuro da educação de Baturité.
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