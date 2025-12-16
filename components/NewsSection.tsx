import React from 'react';
import { FadeInSection } from './FadeInSection';

export const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 0,
      source: "Diário do Nordeste",
      date: "Matéria Recente",
      title: "Criança superdotada do CE se classifica em olimpíada nos EUA e família faz vaquinha para viagem",
      description: "Augusto, de 7 anos, conquistou vaga para a etapa global da Copernicus Olympiad no Texas. Família busca apoio para custear a viagem.",
      link: "https://diariodonordeste.verdesmares.com.br/ceara/crianca-superdotada-do-ce-se-classifica-em-olimpiada-nos-eua-e-familia-faz-vaquinha-para-viagem-1.3714210",
      image: "imagem/augusto.jpg"
    },
    {
      id: 1,
      source: "Diário do Nordeste",
      date: "Especial Superdotados",
      title: "Superdotados e solitários: crianças com altas habilidades enfrentam árdua busca por inclusão",
      description: "Reportagem especial que discute os desafios e o imenso potencial de crianças com altas habilidades no Ceará, contextualizando a jornada educacional de alunos como Augusto.",
      link: "https://diariodonordeste.verdesmares.com.br/ceara/superdotados-e-solitarios-criancas-com-altas-habilidades-enfrentam-ardua-busca-por-inclusao-escolar-1.3290690/especial-superdotados-do-cear%C3%A1-1.3290740",
      image: "imagem/augusto.jpg"
    },
    {
      id: 2,
      source: "Diário do Nordeste",
      date: "Arquivo / Especial",
      title: "Especial Superdotados do Ceará: O desafio da identificação",
      description: "Matéria aprofundada sobre o cenário da superdotação no estado, destacando histórias de superação e a importância do apoio familiar e escolar.",
      link: "https://diariodonordeste.verdesmares.com.br/ceara/superdotados-e-solitarios-criancas-com-altas-habilidades-enfrentam-ardua-busca-por-inclusao-escolar-1.3290690/especial-superdotados-do-cear%C3%A1-1.3290740",
      image: "imagem/augusto.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-baturite-blue mb-4">
              Augusto na Mídia
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Acompanhe a repercussão dessa jornada extraordinária nos principais veículos de comunicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {newsItems.map((item) => (
              <a 
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-baturite-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.source}
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-2 font-medium flex items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-baturite-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-baturite-blue font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                      Ler Matéria Completa
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};