import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';
import balanceRoute from './routers/balanceRoute';
import transactionRoute from './routers/transactionRoute';
import userRoute from './routers/userRoute';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute);
app.use('/balance', balanceRoute);
app.use('/transactions', transactionRoute);

app.use(errorMiddleware);
export default app;
