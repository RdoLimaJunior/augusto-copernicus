import React from 'react';
import { FinancialItem, StatCardProps } from '../types';
import { FadeInSection } from './FadeInSection';

const StatCard: React.FC<StatCardProps> = ({ label, value, type }) => {
  const styles = {
    neutral: "bg-white border-baturite-blue/20 text-baturite-blue",
    success: "bg-green-50 border-green-200 text-status-green",
    danger: "bg-red-50 border-red-200 text-status-red"
  };

  return (
    <div className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center ${styles[type]}`}>
      <span className="text-sm uppercase font-bold tracking-wider mb-2 opacity-70">{label}</span>
      <span className="text-2xl md:text-3xl font-extrabold">{value}</span>
    </div>
  );
};

export const Financials: React.FC = () => {
  const items: FinancialItem[] = [
    { category: "Inscrição", item: "Taxas Iniciais da Olimpíada", value: "R$ 1.500,00", status: "Pago" },
    { category: "Hospedagem", item: "Pacote Aluno (Hotel + Alimentação)", value: "R$ 18.500,00", status: "A Pagar" },
    { category: "Hospedagem", item: "Pacote Responsável", value: "R$ 15.000,00", status: "A Pagar" },
    { category: "Transporte", item: "Passagens Aéreas (Ida/Volta)", value: "R$ 18.810,00", status: "A Pagar" },
    { category: "Documentação", item: "Vistos e Passaportes", value: "R$ 4.000,00", status: "A Pagar" },
  ];

  return (
    <section id="financeiro" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-baturite-blue mb-4">Transparência Financeira</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada centavo arrecadado será destinado exclusivamente para custear a viagem, estadia e taxas do evento.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Custo Total Estimado" value="R$ 57.810" type="neutral" />
            <StatCard label="Valor Já Arrecadado" value="R$ 1.500" type="success" />
            <StatCard label="Falta Captar" value="R$ 56.310" type="danger" />
          </div>

          {/* Detailed Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-baturite-blue text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Item</th>
                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Valor Estimado</th>
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
                      <td className="px-6 py-4 text-gray-800">{row.item}</td>
                      <td className="px-6 py-4 text-gray-800 font-bold whitespace-nowrap">{row.value}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                          row.status === 'Pago' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : 'bg-red-100 text-red-700 border border-red-200'
                        }`}>
                          <i className={`fa-solid ${row.status === 'Pago' ? 'fa-check' : 'fa-hourglass'}`}></i>
                          {row.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center border-t border-gray-200">
              * Valores estimados com base na cotação do dólar atual e pesquisas de voos para Janeiro de 2026.
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};