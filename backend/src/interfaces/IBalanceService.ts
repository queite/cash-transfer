import IAccount from './IAccount';

interface IBalanceService {
  getBalance(id: number): Promise<IAccount | null>
}

export default IBalanceService;
