import { Storage } from '..';
import { Transaction } from '../../../models/Transactions.model';

class TransactionsStorage extends Storage {
  constructor() {
    super('transactions');
  }

  async findAll(): Promise<Transaction[]> {
    const stringData = await this.getItem();
    return stringData ? JSON.parse(stringData) : [];
  }

  async insert(data: Transaction) {
    const transactions = await this.findAll();
    transactions.push(data);
    const stringData = JSON.stringify(transactions);

    await this.setItem(stringData);
  }

  async removeAll() {
    await this.removeItem();
  }
}

export default new TransactionsStorage();
