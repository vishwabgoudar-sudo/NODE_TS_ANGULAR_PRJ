import Joi from 'joi';

export const extensionsDataModelSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  version: Joi.string().required(),
});
