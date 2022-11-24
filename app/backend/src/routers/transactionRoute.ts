import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';
import authnMiddleware from '../middlewares/authMiddleware';
import TransactionService from '../services/TransactionService';

const router = Router();

const transactionController = new TransactionController(TransactionService);

router.post('/', authnMiddleware, (req, res) => transactionController.createTransaction(req, res));
router.get('/', authnMiddleware, (req, res) => transactionController.getTransactions(req, res));
router.get('/search', authnMiddleware, (req, res) => transactionController.search(req, res));

export default router;
