import Joi from 'joi';

export const createPaymentSchema = Joi.object({
  ticketCategory: Joi.string().trim().required(),
  hotel: Joi.boolean().allow('null').required(),
  finalPrice: Joi.number().integer().required(),
});
