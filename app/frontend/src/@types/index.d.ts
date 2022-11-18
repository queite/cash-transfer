export interface IUserData {
  id: number
  username: string
  accountId: number
}

export interface IBalance {
  id: number
  balance: number
}

export interface ITransactions {
    id: number
    debitedAccountId: number
    creditedAccountId: number
    value: number
    createdAt: string

}