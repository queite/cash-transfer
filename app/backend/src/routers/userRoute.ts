import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = Router();

const userController = new UserController(UserService);

router.post('/create', (req, res) => userController.create(req, res));
router.post('/login', (req, res) => userController.create(req, res));

export default router;
