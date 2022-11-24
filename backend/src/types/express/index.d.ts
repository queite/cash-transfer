import { IUserData } from '../../interfaces/IUser';

export { };

declare global {
  namespace Express {
    export interface Request {
      user?: IUserData;
    }
  }
}
