import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getDefaultTickets } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/', getDefaultTickets);

export { ticketsRouter };
