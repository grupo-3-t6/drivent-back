import { notFoundError, conflictError } from '@/errors';
import paymentRepository, { CreatePaymentParams } from '@/repositories/payment-repository';
import stayRepository from '@/repositories/stay-repository';
import ticketRepository from '@/repositories/ticket-repository';

async function checkIfTheTicketIdExists(ticketId: number) {
  const ticket = await ticketRepository.findById(ticketId);

  if (!ticket) {
    throw notFoundError('ticket id');
  }
}

async function checkIfTheStayIdExists(stayId: number) {
  const stay = await stayRepository.findById(stayId);

  if (!stay) {
    throw notFoundError('stay id');
  }
}

async function checksIfTheUserHasAlreadyPurchased(userId: number) {
  const payment = await paymentRepository.findByUserId(userId);

  if (payment) {
    throw conflictError('This user has already purchased a ticket');
  }
}

function formatPrice(price: number) {
  return price * 100;
}

async function postCreatePayment({ ticketId, stayId, userId, finalPrice }: CreatePaymentParams) {
  await checkIfTheTicketIdExists(ticketId);

  await checkIfTheStayIdExists(stayId);

  await checksIfTheUserHasAlreadyPurchased(userId);

  await paymentRepository.insert({ ticketId, stayId, userId, finalPrice: formatPrice(finalPrice) });
}

const paymentService = {
  postCreatePayment,
};

export default paymentService;
