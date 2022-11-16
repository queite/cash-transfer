import { Router } from 'express';
import BalanceController from '../controllers/BalanceController';
import authnMiddleware from '../middlewares/authMiddleware';
import BalanceService from '../services/BalanceService';

const router = Router();

const balanceController = new BalanceController(BalanceService);

router.get('/', authnMiddleware, (req, res) => balanceController.get(req, res));

export default router;
