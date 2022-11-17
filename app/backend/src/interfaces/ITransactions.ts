export interface ITransaction {
  username: string
  balance: number
  value: number
}

export interface ITransactionData {
  debitedUserId: number
  creditedUsername: string
  value: number,
}

export interface ITransferData {
  debitedAccountId: number;
  newDebitedAccountBalance: number;
  creditedAccountId: number;
  newCreditedAccountBalance: number;
  value: number
}
