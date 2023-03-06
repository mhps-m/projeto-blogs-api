const Joi = require('joi');

const newUserSchema = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).required();

const newCategorySchema = Joi.object().keys({
  name: Joi.string().required(),
}).required();

const newPostSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

module.exports = {
  newUserSchema,
  newCategorySchema,
  newPostSchema,
};