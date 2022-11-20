import { ITransferData } from '../../interfaces/ITransactions';

type createdTransaction = {
  dataValues: {
    id: number
    debitedAccountId: number
    creditedAccountId: number
    value: number
    createdAt: string
  }
}

type dataNeededToTransfer = {
  username: string
  value: number
}

const createdTransactionMock: createdTransaction = {
  dataValues: {
    id: 1,
    debitedAccountId: 1,
    creditedAccountId: 3,
    value: 20,
    createdAt: '2022-11-19T19:47:38.293Z'
  }
}

const dataNeededToTransferMock: dataNeededToTransfer = {
  username: 'Jane',
  value: 20
}

const returnOfTransferValidation: ITransferData= {
  debitedAccountId: 1,
  newDebitedAccountBalance: 80,
  creditedAccountId: 3,
  newCreditedAccountBalance: 120,
  value: 20,
}


export {
  createdTransactionMock,
  dataNeededToTransferMock,
  returnOfTransferValidation
};
