import { Request, Response } from 'express';
import HttpException from '../errors/httpException';
import IUserService from '../interfaces/IUserService';

export default class UserController {
  constructor(private readonly userService: IUserService) {}

  async login(req: Request, res: Response) {
    const token = await this.userService.login(req.body);
    return res.status(200).json({ token });
  }

  async create(req: Request, res: Response) {
    const token = await this.userService.create(req.body);
    return res.status(201).json({ token });
  }

  async getUserData(req: Request, res: Response) {
    if (!req.user) throw new HttpException(401, 'Unauthorized user');
    const user = await this.userService.getUserData(req.user.username);
    return res.status(200).json(user);
  }
}
