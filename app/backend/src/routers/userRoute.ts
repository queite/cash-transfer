import { Router } from 'express';
import UserController from '../controllers/UserController';
import authnMiddleware from '../middlewares/authMiddleware';
import UserService from '../services/UserService';

const router = Router();

const userController = new UserController(UserService);

router.post('/create', (req, res) => userController.create(req, res));
router.post('/login', (req, res) => userController.login(req, res));
router.get('/user', authnMiddleware, (req, res) => userController.getUserData(req, res));

export default router;
