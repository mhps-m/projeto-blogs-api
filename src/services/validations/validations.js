const HttpErrors = require('http-errors');
const { newUserSchema, newCategorySchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);

  if (error) {
    throw new HttpErrors(400, error.message);
  }
};

const validateNewCategory = (category) => {
  const { error } = newCategorySchema.validate(category);

  if (error) {
    throw new HttpErrors(400, error.message);
  }
};

module.exports = {
  validateNewUser,
  validateNewCategory,
};