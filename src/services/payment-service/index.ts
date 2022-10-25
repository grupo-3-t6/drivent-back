import { notFoundError, conflictError } from '@/errors';
import paymentRepository, { CreatePaymentParams, PaymentResponse } from '@/repositories/payment-repository';
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

function formatPaymentResponse(payment: PaymentResponse) {
  const ticket = payment.Ticket;
  const stay = payment.Stay;

  delete payment.Ticket;
  delete payment.Stay;

  return { id: payment.id, userId: payment.userId, finalPrice: payment.finalPrice / 100, ticket, stay };
}

async function getPayment(userId: number) {
  const payment = await paymentRepository.findByUserId(userId);

  if (!payment) return {};

  return formatPaymentResponse(payment);
}

const paymentService = {
  getPayment,
  postCreatePayment,
};

export default paymentService;
