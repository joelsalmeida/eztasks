import Joi from 'joi';

export const CreateTodoSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  title: Joi.string().max(50).required(),
  description: Joi.string().max(150),
  status: Joi.string().required(),
});

export const UpdateTodoSchema = Joi.object({
  title: Joi.string().max(50),
  description: Joi.string().max(150),
  status: Joi.string(),
});
