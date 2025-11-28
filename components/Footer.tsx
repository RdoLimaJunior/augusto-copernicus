import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-baturite-blue text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center items-center gap-2">
          <i className="fa-solid fa-rocket text-baturite-yellow text-2xl"></i>
          <span className="font-montserrat font-bold text-xl">BATURITÉ NA NASA</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto text-sm text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-2">Contato</h4>
            <p>(85) 99999-9999</p>
            <p>contato@baturitenanasa.com.br</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Localização</h4>
            <p>Baturité, Ceará - Brasil</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Redes Sociais</h4>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-baturite-yellow transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-baturite-yellow transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
              <a href="#" className="hover:text-baturite-yellow transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-sm text-gray-400">
          <p>&copy; 2025 Projeto Baturité na NASA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};