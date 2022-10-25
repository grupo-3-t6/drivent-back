// import { notFoundError } from '@/errors';
// import paymentRepository from '@/repositories/payment-repository';
// import { exclude } from '@/utils/prisma-utils';

async function postCreatePayment() {
  // const enrollment = exclude(params, 'address');
  // const address = getAddressForUpsert(params.address);
  // const newEnrollment = await enrollmentRepository.upsert(params.userId, enrollment, exclude(enrollment, 'userId'));
  // await addressRepository.upsert(newEnrollment.id, address, address);
}

const paymentService = {
  postCreatePayment,
};

export default paymentService;
