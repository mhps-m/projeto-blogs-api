const HttpErrors = require('http-errors');
const { User } = require('../models');
const { validateNewUser } = require('./validations/validations');

const createUser = async (userData) => {
  validateNewUser(userData);

  const checkExistingUser = await User.findOne({
    where: { email: userData.email },
  });

  console.log(checkExistingUser);
  if (checkExistingUser) {
    throw new HttpErrors(409, 'User already registered');
  }

  const newUser = await User.create(userData);

  return newUser;
};

module.exports = {
  createUser,
};