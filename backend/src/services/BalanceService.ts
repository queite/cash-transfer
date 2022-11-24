import Account from '../database/models/Account';
import IAccount from '../interfaces/IAccount';

export default class BalanceService {
  static async getBalance(id: number): Promise<IAccount | null> {
    const balance = await Account.findOne({ where: { id } });
    return balance;
  }
}
