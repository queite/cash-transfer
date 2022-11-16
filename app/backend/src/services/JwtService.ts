import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';
import { IUserData } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'anyString';

export default class JwtService {
  static sign(payload: IUserData): string {
    return sign(payload, secret, { expiresIn: '24h' });
  }

  static verify(token: string): IUserData {
    return verify(token, secret) as IUserData;
  }
}
