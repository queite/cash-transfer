import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';
import authnMiddleware from '../middlewares/authMiddleware';
import TransactionService from '../services/TransactionService';

const router = Router();

const transactionController = new TransactionController(TransactionService);

router.post('/', authnMiddleware, (req, res) => transactionController.transfer(req, res));

export default router;
