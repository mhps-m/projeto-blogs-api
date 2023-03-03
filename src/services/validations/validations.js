const HttpErrors = require('http-errors');
const { newUserSchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);

  if (error) {
    throw new HttpErrors(400, error.message);
  }
};

module.exports = {
  validateNewUser,
};