import { Request, Response } from 'express';
import Transaction from '../database/models/Transaction';
import HttpException from '../errors/httpException';
import { ITransactionService } from '../interfaces/ITransactionService';

const unauthorizedUser = 'Unauthorized user';

export default class TransactionController {
  constructor(private transactionService: ITransactionService) {}

  async createTransaction(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactionData = {
      debitedUserId: req.user.id,
      creditedUsername: req.body.username,
      value: req.body.value,
    };
    await this.transactionService.createTransaction(transactionData);
    return res.status(201).send();
  }

  async getTransactions(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactions = await this.transactionService.getTransactions(req.user.id);
    return res.status(200).json(transactions);
  }

  async search(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    let transactions: Transaction[] = [];
    const query = req.query.q as string;
    if (query.includes('-')) {
      transactions = await this.transactionService
        .getTransactionByDate(query, req.user.id);
    }
    if (query === 'cashout') {
      transactions = await this.transactionService.getCashOutTransactions(req.user.id);
    }
    if (query === 'cashin') {
      transactions = await this.transactionService.getCashInTransactions(req.user.id);
    }
    if (query === 'all') {
      transactions = await this.transactionService.getTransactions(req.user.id);
    }
    return res.status(200).json(transactions);
  }
}
