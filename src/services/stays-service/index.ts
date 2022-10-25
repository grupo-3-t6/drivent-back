import stayRepository from '@/repositories/stay-repository';
import { Stay } from '@prisma/client';

type GetStaysResponse = Omit<Stay, 'createdAt' | 'updatedAt'>;

function formatStays(stays: Stay[]): GetStaysResponse[] {
  return stays.map((stay) => {
    delete stay.createdAt;
    delete stay.updatedAt;

    return { id: stay.id, name: stay.name, price: stay.price / 100 };
  });
}

async function getStays() {
  const stays = await stayRepository.findAll();
  return formatStays(stays);
}

const staysService = {
  getStays,
};

export default staysService;
