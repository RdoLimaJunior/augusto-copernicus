export interface FinancialItem {
  category: string;
  item: string;
  value: string;
  status: 'Pago' | 'A Pagar';
}

export interface StatCardProps {
  label: string;
  value: string;
  type: 'neutral' | 'success' | 'danger';
}