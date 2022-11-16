import { Request, Response } from 'express';
import IUserService from '../interfaces/IUserService';

export default class UserController {
  constructor(private readonly userService: IUserService) {}

  async create(req: Request, res: Response) {
    const token = await this.userService.login(req.body);
    return res.status(200).json({ token });
  }
}
