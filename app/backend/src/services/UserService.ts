import bcrypt, { compareSync } from 'bcrypt';
import Account from '../database/models/Account';
import sequelize from '../database/models/index';
import User from '../database/models/User';
import HttpException from '../errors/httpException';
import { ILogin, LoginZodSchema } from '../interfaces/IUser';
import JwtService from './JwtService';

export default class UserService {
  static async create(login: ILogin): Promise<string | null> {
    LoginZodSchema.parse(login);
    const result = await sequelize.transaction(async (t) => {
      const account = await Account.create({}, { transaction: t });
      const user = await User.create({
        username: login.username,
        password: bcrypt.hashSync(login.password, 3),
        accountId: account.id,
      }, { transaction: t });
      const { password, ...userData } = user.dataValues;
      return JwtService.sign(userData);
    });
    return result;
  }

  static async login(login: ILogin): Promise<string | null> {
    const user = await User.findOne({ where: { username: login.username } });
    if (!user) {
      const newUserToken = await this.create(login);
      return newUserToken;
    }
    const checkPassword = compareSync(login.password, user.password);
    if (!checkPassword) throw new HttpException(401, 'Incorrect username or password');
    const { password, ...userData } = user.dataValues;
    return JwtService.sign(userData);
  }
}
