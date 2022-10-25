import { prisma } from '@/config';

async function findById(id: number) {
  return prisma.stay.findUnique({ where: { id } });
}

const stayRepository = {
  findById,
};

export default stayRepository;
