import { AuthenticatedRequest } from '@/middlewares';
import staysService from '@/services/stays-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getStays(req: AuthenticatedRequest, res: Response) {
  const stays = await staysService.getStays();

  return res.status(httpStatus.OK).send(stays);
}
