import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  TZ: Joi.required(),
  NODE_PORT: Joi.number().default(3001),
  DEFAULT_LIMIT: Joi.number().default(10),
  MONGO_DATABASE: Joi.string(),
  MONGO_USERNAME: Joi.string(),
  MONGO_PASSWORD: Joi.string(),
  MONGO_EXT_PORT: Joi.number(),
  MONGO_URL: Joi.string(),
});
