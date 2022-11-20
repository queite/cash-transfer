import chai from 'chai';
import sinon from 'sinon';
import app from '../app';
import Account from '../database/models/Account';
import Transaction from '../database/models/Transaction';
import BalanceService from '../services/BalanceService';
import JwtService from '../services/JwtService';
import TransactionService from '../services/TransactionService';
import UserService from '../services/UserService';
import { createdTransactionMock, dataNeededToTransferMock, returnOfTransferValidation } from './mocks/transactionMocks';
import { userDataMock } from './mocks/userMocks';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('/transactions', () => {
  beforeEach(() => {
    sinon.stub(JwtService,  'verify').returns(userDataMock);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return status 201 in case of succes', async () => {
    sinon.stub(TransactionService, 'validateTransfer').resolves(returnOfTransferValidation);
    sinon.stub(Account, 'update').resolves([1]);
    sinon.stub(Transaction, 'create').resolves(createdTransactionMock as Transaction);

    const response = await chai.request(app)
      .post('/transactions')
      .set({ "Authorization": `token` })
      .send(dataNeededToTransferMock);
    expect(response.status).to.be.eq(201);
  });

  it('should throw an error if the debited and credited account are the same', async () => {
    sinon.stub(UserService, 'getUserData').resolves(userDataMock);
    sinon.stub(BalanceService, 'getBalance')
      .onFirstCall().resolves({id: 1, balance: 100})
      .onSecondCall().resolves({id: 1, balance: 100});

    const response = await chai.request(app)
      .post('/transactions')
      .set({ "Authorization": `token` })
      .send(dataNeededToTransferMock);
    expect(response.status).to.be.eq(422);
    expect(response.body).to.be.deep.eq({message: 'Debit account must be different from credit account'});
  });

  it('should throw an error if the balance is not enough to do the transfer', async () => {
    sinon.stub(UserService, 'getUserData').resolves(userDataMock);
    sinon.stub(BalanceService, 'getBalance')
      .onFirstCall().resolves({id: 3, balance: 100})
      .onSecondCall().resolves({id: 1, balance: 0});

    const response = await chai.request(app)
      .post('/transactions')
      .set({ "Authorization": `token` })
      .send(dataNeededToTransferMock);
    expect(response.status).to.be.eq(422);
    expect(response.body).to.be.deep.eq({message: 'Insufficient balance'});
  });
});

describe('/transactions/search', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should only return transactions according to the chosen filter', async () => {
    sinon.stub(JwtService,  'verify').returns(userDataMock);
    sinon.stub(Transaction, 'findAll').resolves([createdTransactionMock as Transaction]);

    const response = await chai.request(app)
      .get('/transactions/search')
      .set({ "Authorization": `token` })
      .query({q: '2022-11-19'});
    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('array');
  });
})