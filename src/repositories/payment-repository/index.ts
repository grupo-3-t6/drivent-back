import { prisma } from '@/config';
import { Payment } from '@prisma/client';

async function insertPayment(params: CreatePaymentParams) {
  return prisma.payment.create({ data: params });
}

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;

const paymentRepository = {
  insertPayment,
};

export default paymentRepository;
