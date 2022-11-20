import bcrypt from 'bcrypt';
import chai from 'chai';
import sinon from 'sinon';
import app from '../app';
import Account from '../database/models/Account';
import User from '../database/models/User';
import JwtService from '../services/JwtService';
import accountMock from './mocks/accountMocks';
import { loginBadPasswordMock, loginMock, userDataMock, userMock } from './mocks/userMocks';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('/users/login', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return a token in case of success', async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);
    sinon.stub(bcrypt, 'compareSync').returns(true);

    const response = await chai.request(app).post('/users/login').send(loginMock);
    expect(response.body).to.have.key('token');
  });

  it('should return an error if username is not registered', async () => {
    sinon.stub(User, 'findOne').resolves(null);

    const response = await chai.request(app).post('/users/login').send(loginMock);
    expect(response.body).to.be.deep.eq({ message: 'User not found' });
  });

  it('should return an error if password is not correct', async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);
    sinon.stub(bcrypt, 'compareSync').returns(false);

    const response = await chai.request(app).post('/users/login').send(loginBadPasswordMock);
    expect(response.status).to.be.eq(401);
    expect(response.body).to.be.deep.eq({ message: 'Incorrect username or password' });
  });
});


describe('/users/create', () => {
    afterEach(() => {
    sinon.restore();
  });

  it('should return a token in case of success', async () => {
    sinon.stub(User, 'findOne').resolves(null);
    sinon.stub(User, 'create').resolves(userMock as User);
    sinon.stub(Account, 'create').resolves(accountMock as Account);

    const response = await chai.request(app).post('/users/create').send(loginMock);
    expect(response.status).to.be.eq(201);
    expect(response.body).to.have.key('token');
  });

  it('should return an error if the user already exists', async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);

    const response = await chai.request(app).post('/users/create').send(loginMock);
    expect(response.status).to.be.eq(400);
    expect(response.body).to.be.deep.eq({ message: 'User already registered' });
  });
});

describe('/users/user', () => {
    afterEach(() => {
    sinon.restore();
  });

  it('should return user data', async () => {
    sinon.stub(User, 'findOne').resolves(userMock as User);
    sinon.stub(JwtService,  'verify').returns(userDataMock)

    const response = await chai.request(app).get('/users/user').set({ "Authorization": `token` });
    console.log(response.body);
    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.deep.eq(userDataMock);
  });
});