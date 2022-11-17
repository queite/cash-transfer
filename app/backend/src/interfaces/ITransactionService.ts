import { ITransactionData, ITransferData } from './ITransactions';

export interface ITransactionService {
  validateTransfer(transactionData: ITransactionData): Promise<ITransferData>
  transfer(transactionData: ITransactionData): Promise<void>
}
