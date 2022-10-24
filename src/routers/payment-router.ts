import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { postCreatePayment } from '@/controllers';
import { createPaymentSchema } from '@/schemas';

const paymentRouter = Router();

paymentRouter.all('/*', authenticateToken).post('/', validateBody(createPaymentSchema), postCreatePayment);

export { paymentRouter };
