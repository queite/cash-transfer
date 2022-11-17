import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';
import authnMiddleware from '../middlewares/authMiddleware';
import TransactionService from '../services/TransactionService';

const router = Router();

const transactionController = new TransactionController(TransactionService);

router.post('/', authnMiddleware, (req, res) => transactionController.transfer(req, res));
router.get('/', authnMiddleware, (req, res) => transactionController.getTransactions(req, res));
router.get(
  '/date',
  authnMiddleware,
  (req, res) => transactionController.getTransactionsByDate(req, res),
);
router.get(
  '/cashin',
  authnMiddleware,
  (req, res) => transactionController.getCashInTransactions(req, res),
);
router.get(
  '/cashout',
  authnMiddleware,
  (req, res) => transactionController.getCashOutTransactions(req, res),
);

export default router;
