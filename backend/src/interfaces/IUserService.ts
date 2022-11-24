import { ILogin, IUserData } from './IUser';

interface IUserService {
  create: (login: ILogin) => Promise<string | null>
  login(login: ILogin): Promise<string | null>
  getUserData(username: string): Promise<IUserData>
}

export default IUserService;
