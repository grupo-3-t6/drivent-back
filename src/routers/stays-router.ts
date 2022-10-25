import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getStays } from '@/controllers';

const staysRouter = Router();

staysRouter.all('/*', authenticateToken).get('/', getStays);

export { staysRouter };
