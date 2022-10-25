import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getPayment, postCreatePayment } from '@/controllers';
import { createPaymentSchema } from '@/schemas';

const paymentRouter = Router();

paymentRouter.all('/*', authenticateToken).post('/', validateBody(createPaymentSchema), postCreatePayment);
paymentRouter.all('/*', authenticateToken).get('/', getPayment);

export { paymentRouter };
