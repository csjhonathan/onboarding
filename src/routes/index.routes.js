import { Router } from 'express';
import passengerRouter from './passengers.routes.js';

const indexRouter = Router();

indexRouter.use('/passengers', passengerRouter);

export default indexRouter;