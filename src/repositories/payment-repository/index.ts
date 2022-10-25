import { prisma } from '@/config';
import { Payment } from '@prisma/client';

async function findByUserId(userId: number): Promise<PaymentResponse> {
  return prisma.payment.findUnique({
    where: {
      userId,
    },
    select: {
      id: true,
      userId: true,
      Ticket: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
      Stay: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
      finalPrice: true,
    },
  });
}

async function insert(params: CreatePaymentParams) {
  return prisma.payment.create({ data: params });
}

export type CreatePaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;
export interface PaymentResponse {
  id: number;
  userId: number;
  finalPrice: number;
  Ticket: {
    id: number;
    name: string;
    price: number;
  };
  Stay: {
    id: number;
    name: string;
    price: number;
  };
}

const paymentRepository = {
  findByUserId,
  insert,
};

export default paymentRepository;
