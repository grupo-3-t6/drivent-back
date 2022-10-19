import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getDefaultTickets(_req: Request, res: Response) {
  const tickets = await ticketsService.getTickets();

  return res.status(httpStatus.OK).send(tickets);
}
