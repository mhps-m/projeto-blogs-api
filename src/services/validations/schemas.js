const Joi = require('joi');

const newUser = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).required();

const newCategory = Joi.object().keys({
  name: Joi.string().required(),
}).required();

const newPost = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const updatePost = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  newUser,
  newCategory,
  newPost,
  updatePost,
};