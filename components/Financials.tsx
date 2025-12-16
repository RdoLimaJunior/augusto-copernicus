import React from 'react';
import { FinancialItem, StatCardProps } from '../types';
import { FadeInSection } from './FadeInSection';

const StatCard: React.FC<StatCardProps> = ({ label, value, type }) => {
  const styles = {
    neutral: "bg-white border-baturite-blue/20 text-baturite-blue",
    success: "bg-green-50 border-green-200 text-status-green",
    danger: "bg-red-50 border-red-200 text-status-red",
    celebration: "bg-yellow-50 border-baturite-yellow text-baturite-blue"
  };

  return (
    <div className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center ${styles[type]}`}>
      <span className="text-sm uppercase font-bold tracking-wider mb-2 opacity-70">{label}</span>
      <span className="text-2xl md:text-3xl font-extrabold">{value}</span>
      {type === 'celebration' && (
        <span className="text-xs font-bold mt-2 text-status-green animate-pulse">
          <i className="fa-solid fa-star mr-1"></i> META ATINGIDA!
        </span>
      )}
      {type === 'danger' && (
        <span className="text-xs font-bold mt-2 text-status-red">
          <i className="fa-solid fa-bullseye mr-1"></i> NOSSA META ATUAL
        </span>
      )}
    </div>
  );
};

export const Financials: React.FC = () => {
  // Conversão estimada: $1 USD = R$ 6,00 (Margem de segurança para câmbio turismo/IOF)
  const items: FinancialItem[] = [
    { 
      category: "Inscrição", 
      item: "Taxas Iniciais da Olimpíada", 
      value: "R$ 1.500,00", 
      status: "Pago" 
    },
    { 
      category: "Hospedagem", 
      item: "Augusto de Paula Bezerra - STUDENT", 
      value: "US$ 1.750,00", 
      status: "Pago",
      sponsor: "Prefeitura de Baturité"
    },
    { 
      category: "Hospedagem", 
      item: "Vaneuda Almeida de Paula - GUEST (Mãe)", 
      value: "US$ 1.650,00", 
      status: "Pago"
    },
    { 
      category: "Hospedagem", 
      item: "Raimundo Bezerra Lima Júnior - GUEST (Pai)", 
      value: "US$ 1.750,00", 
      status: "A Pagar"
    },
    { 
      category: "Transporte", 
      item: "Passagens Aéreas (Ida/Volta)", 
      value: "R$ 18.810,00", 
      status: "Pago",
      sponsor: "Casa Civil do Estado do Ceará"
    },
    { 
      category: "Documentação", 
      item: "Vistos e Passaportes", 
      value: "R$ 4.000,00", 
      status: "Pago",
      sponsor: "Prefeitura de Baturité"
    },
  ];

  return (
    <section id="financeiro" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-baturite-blue mb-4">Transparência Financeira</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Acompanhe a prestação de contas da nossa jornada. Graças a apoios institucionais importantes, avançamos muito!
            </p>
            
            {/* Status Banner */}
            <div className="bg-blue-50 border-l-4 border-baturite-blue text-blue-900 p-4 max-w-3xl mx-auto rounded-r shadow-sm mb-8">
              <div className="flex items-center justify-center gap-3">
                <i className="fa-solid fa-chart-line text-2xl text-baturite-blue"></i>
                <div className="text-left">
                  <p className="font-bold">GRANDE AVANÇO!</p>
                  <p className="text-sm">Garantimos as passagens, documentação, pacote do Augusto e de um responsável! Agora precisamos viabilizar a ida do pai.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Cálculo aproximado: 1.500 + (1750*6) + (1650*6) + (1750*6) + 18.810 + 4.000 = ~55.210 */}
            <StatCard label="Custo Total Estimado" value="R$ 55.210" type="neutral" />
            <StatCard label="Valor Garantido" value="R$ 44.710" type="success" />
            {/* Falta o pacote do Raimundo: $1750 * 6 = 10.500 */}
            <StatCard label="Falta Captar" value="R$ 10.500" type="danger" />
          </div>

          {/* Detailed Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-baturite-blue text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Item</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Valor</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`group transition-all duration-300 border-l-4 border-transparent hover:border-baturite-blue hover:shadow-md ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/50`}
                    >
                      <td className="px-6 py-4 text-gray-600 font-medium group-hover:text-baturite-blue transition-colors">{row.category}</td>
                      <td className="px-6 py-4 text-gray-800">
                        <div className="flex flex-col">
                          <span className="font-medium">{row.item}</span>
                          {row.sponsor && (
                            <span className="text-xs text-baturite-blue font-bold mt-1 bg-blue-100 inline-block px-2 py-0.5 rounded w-fit">
                              <i className="fa-solid fa-handshake-simple mr-1"></i> Apoio: {row.sponsor}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-800 font-bold whitespace-nowrap">
                        {row.value}
                        {row.value.includes('US$') && (
                          <span className="block text-xs text-gray-400 font-normal">~R$ {(parseFloat(row.value.replace('US$ ', '').replace('.','').replace(',','.')) * 6).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                          row.status === 'Pago' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : row.status === 'Incluso'
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'bg-red-100 text-red-700 border border-red-200'
                        }`}>
                          <i className={`fa-solid ${row.status === 'Pago' ? 'fa-check' : row.status === 'Incluso' ? 'fa-gift' : 'fa-hourglass'}`}></i>
                          {row.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center border-t border-gray-200">
              * Valores em dólar convertidos para R$ com cotação estimada de 6,00 (incluindo IOF e taxas). 
              Agradecemos imensamente à Prefeitura de Baturité e à Casa Civil do Estado do Ceará.
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};