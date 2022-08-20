export class Transaction {
  id: string;

  name: string;

  amount: string;

  category: string;

  type: 'income' | 'outcome';

  createdAt: Date;
}
