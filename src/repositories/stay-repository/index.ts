import { prisma } from '@/config';

async function findAll() {
  return prisma.stay.findMany({ orderBy: { id: 'asc' } });
}

async function findById(id: number) {
  return prisma.stay.findUnique({ where: { id } });
}

const stayRepository = {
  findAll,
  findById,
};

export default stayRepository;
