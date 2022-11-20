import { ILogin, IUserData } from "../../interfaces/IUser";

type IUserMock = {
  dataValues: {
    id: number
    username: string
    password: string
    accountId: number
  }
}

const userMock: IUserMock = {
  dataValues: {
      id: 1,
      username: "Doe",
      password: '$2b$04$DOdbbHVY6.gsIsb9tAEl9un/LTAqbZmFCwmwgApH4nIfRYoAY5Qku',
      accountId: 1
  }
}

const loginMock: ILogin = {
  username: "Doe",
  password: "123456Q8"
}

const loginBadPasswordMock: ILogin = {
  username: "Doe",
  password: "123456Q7"
}

const userDataMock: IUserData = {
  id: 1,
  username: "Doe",
  accountId: 1
}

export { userMock, loginMock, loginBadPasswordMock, userDataMock };
