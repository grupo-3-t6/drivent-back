import { prisma } from '@/config';

async function findAll() {
  return prisma.ticket.findMany({ orderBy: { id: 'asc' } });
}

const ticketRepository = {
  findAll,
};

export default ticketRepository;
