import { prisma } from '@/config';

async function findAll() {
  return prisma.ticket.findMany({ orderBy: { id: 'asc' } });
}

async function findById(id: number) {
  return prisma.ticket.findUnique({ where: { id } });
}

const ticketRepository = {
  findAll,
  findById,
};

export default ticketRepository;
