import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';
import { exclude } from '@/utils/prisma-utils';
import { Ticket } from '@prisma/client';

async function getTickets(): Promise<GetTicketsResult[]> {
  const ticket = await ticketRepository.findAll();
  if (!ticket.length) throw notFoundError();

  return ticket.map((el) => {
    const newTicket = { ...el, price: el.price / 100 };
    return exclude(newTicket, 'createdAt', 'updatedAt');
  });
}

export type GetTicketsResult = Omit<Ticket, 'createdAt' | 'updatedAt'>;

const ticketsService = {
  getTickets,
};

export default ticketsService;
