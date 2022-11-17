import { Request, Response } from 'express';
import HttpException from '../errors/httpException';
import { ITransactionService } from '../interfaces/ITransactionService';

export default class TransactionController {
  constructor(private transactionService: ITransactionService) {}

  async transfer(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, 'Unauthorized user');
    const transactionData = {
      debitedUserId: req.user.id,
      creditedUsername: req.body.username,
      value: req.body.value,
    };
    await this.transactionService.transfer(transactionData);
    return res.status(201).send();
  }
}
