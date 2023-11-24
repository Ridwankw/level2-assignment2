import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);

router.get('/', UserControllers.getAllUsers);

router.get('/:userId', UserControllers.getSingleUser);

router.put('/:userId', UserControllers.updateSingleUser);

router.delete('/:userId', UserControllers.deleteSingleUser);

router.put('/:userId/orders', UserControllers.addOrderToUser);

router.get('/:userId/orders', UserControllers.getUserOrders);

router.get('/:userId/orders/total-price', UserControllers.calculateTotalPrice);

export const UserRoutes = router;
