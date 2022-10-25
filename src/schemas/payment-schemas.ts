import Joi from 'joi';

export const createPaymentSchema = Joi.object({
  ticketId: Joi.number().integer().positive().required(),
  stayId: Joi.number().integer().positive().allow(null).required(),
  finalPrice: Joi.number().integer().min(0).required(),
});
