import chai from 'chai';
import sinon from 'sinon';
import app from '../app';
import Account from '../database/models/Account';
import JwtService from '../services/JwtService';
import accountMock from './mocks/accountMocks';
import { userDataMock } from './mocks/userMocks';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('/balance', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return balance', async () => {
    sinon.stub(Account, 'findOne').resolves(accountMock as Account);
    sinon.stub(JwtService,  'verify').returns(userDataMock);

    const response = await chai.request(app).get('/balance').set({ "Authorization": `token`});
    expect(response.body).to.have.keys('id', 'balance');
  });
});