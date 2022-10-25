import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payment-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postCreatePayment(req: AuthenticatedRequest, res: Response) {
  await paymentService.postCreatePayment({
    ...req.body,
    userId: req.userId,
  });

  return res.sendStatus(httpStatus.OK);
}

export async function getPayment(req: AuthenticatedRequest, res: Response) {
  const payment = await paymentService.getPayment(req.userId);

  return res.status(httpStatus.OK).send(payment);
}
