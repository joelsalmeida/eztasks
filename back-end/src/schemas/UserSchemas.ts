import Joi from 'joi';

export const CreateUserSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});

export const UpdateUserSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  password: Joi.string().min(7),
});
