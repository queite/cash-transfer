import { Op } from 'sequelize';
import Account from '../database/models/Account';
import sequelize from '../database/models/index';
import Transaction from '../database/models/Transaction';
import HttpException from '../errors/httpException';
import { ITransactionData, ITransferData } from '../interfaces/ITransactions';
import BalanceService from './BalanceService';
import UserService from './UserService';

export default class TransactionService {
  static async validateTransfer(transactionData: ITransactionData): Promise<ITransferData> {
    const { debitedUserId, creditedUsername, value } = transactionData;
    const creditedUser = await UserService.getUserData(creditedUsername);
    const creditedAccount = await BalanceService.getBalance(creditedUser.accountId);
    const debitedAccount = await BalanceService.getBalance(debitedUserId);
    if (!creditedAccount || !debitedAccount) {
      throw new HttpException(404, 'Debit or credit account not found');
    }
    if (debitedAccount.id === creditedAccount.id) {
      throw new HttpException(422, 'Debit account must be different from credit account');
    }
    if (debitedAccount.balance < value) throw new HttpException(422, 'Insufficient balance');
    return {
      debitedAccountId: debitedAccount.id,
      newDebitedAccountBalance: Number(debitedAccount.balance) - Number(value),
      creditedAccountId: creditedAccount.id,
      newCreditedAccountBalance: Number(creditedAccount.balance) + Number(value),
      value: transactionData.value,
    };
  }

  static async transfer(transactionData: ITransactionData): Promise<void> {
    const transferData = await this.validateTransfer(transactionData);
    const { debitedAccountId, creditedAccountId, value } = transferData;
    await sequelize.transaction(async (t) => {
      await Account.update(
        { balance: transferData.newDebitedAccountBalance },
        { where: { id: transferData.debitedAccountId }, transaction: t },
      );
      await Account.update(
        { balance: transferData.newCreditedAccountBalance },
        { where: { id: transferData.creditedAccountId }, transaction: t },
      );
      await Transaction.create({
        debitedAccountId,
        creditedAccountId,
        value,
      }, { transaction: t });
    });
  }

  static async getTransactions(id: number): Promise<Transaction[]> {
    const transactions = await Transaction.findAll({ where: {
      [Op.or]: [
        { debitedAccountId: id },
        { creditedAccountId: id },
      ],
    } });
    return transactions;
  }

  static async getTransactionByDate(date: Date): Promise<Transaction[]> {
    const transactions = await Transaction.findAll({ where: { createdAt: date } });
    return transactions;
  }

  static async getTransactionByCashOut(id: number): Promise<Transaction[]> {
    const transactions = await Transaction.findAll({ where: { debitedAccountId: id } });
    return transactions;
  }

  static async getTransactionByCashIn(id: number): Promise<Transaction[]> {
    const transactions = await Transaction.findAll({ where: { creditedAccountId: id } });
    return transactions;
  }
}
