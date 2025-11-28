import React from 'react';

export const FloatingButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5585999935789" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] hover:bg-[#1fa851] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
};