import { Request, Response } from 'express';
import HttpException from '../errors/httpException';
import IBalanceService from '../interfaces/IBalanceService';

export default class BalanceController {
  constructor(private balanceService: IBalanceService) {}

  async get(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, 'Unauthorized user');
    const balance = await this.balanceService.getBalance(req.user.id);
    return res.status(200).json(balance);
  }
}
