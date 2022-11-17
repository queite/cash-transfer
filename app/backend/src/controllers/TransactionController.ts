import { Request, Response } from 'express';
import HttpException from '../errors/httpException';
import { ITransactionService } from '../interfaces/ITransactionService';

const unauthorizedUser = 'Unauthorized user';

export default class TransactionController {
  constructor(private transactionService: ITransactionService) {}

  async transfer(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactionData = {
      debitedUserId: req.user.id,
      creditedUsername: req.body.username,
      value: req.body.value,
    };
    await this.transactionService.transfer(transactionData);
    return res.status(201).send();
  }

  async getTransactions(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactions = await this.transactionService.getTransactions(req.user.id);
    return res.status(200).json(transactions);
  }

  async getTransactionsByDate(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactions = await this.transactionService
      .getTransactionByDate(req.body.date, req.user.id);
    return res.status(200).json(transactions);
  }

  async getCashOutTransactions(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactions = await this.transactionService.getCashOutTransactions(req.user.id);
    return res.status(200).json(transactions);
  }

  async getCashInTransactions(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, unauthorizedUser);
    const transactions = await this.transactionService.getCashInTransactions(req.user.id);
    return res.status(200).json(transactions);
  }
}
