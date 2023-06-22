import { Router } from 'express';
const passengersRouter = Router();
import passengersController from '../controllers/passengers.controller.js';

passengersRouter.get('/travels', passengersController.listPassengersTravels);

export default passengersRouter;