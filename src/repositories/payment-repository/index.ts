import { prisma } from '@/config';
import { Payment } from '@prisma/client';

async function findByUserId(userId: number) {
  return prisma.payment.findUnique({ where: { userId } });
}

async function insert(params: CreatePaymentParams) {
  return prisma.payment.create({ data: params });
}

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;

const paymentRepository = {
  findByUserId,
  insert,
};

export default paymentRepository;
