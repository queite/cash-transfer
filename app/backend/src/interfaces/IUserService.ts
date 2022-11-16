import { ILogin } from './IUser';

interface IUserService {
  create: (login: ILogin) => Promise<string | null>
  login(login: ILogin): Promise<string | null>
}

export default IUserService;
