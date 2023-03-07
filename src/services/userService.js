const HttpErrors = require('http-errors');
const { User } = require('../models');
const { newUser } = require('./validations/schemas');
const validate = require('./validations/validate');

const getAll = async () => User.findAll({
  attributes: {
    exclude: ['password'],
  },
});

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) throw new HttpErrors(404, 'User does not exist');

  return user;
};

const createUser = async (userData) => {
  validate(newUser, userData);

  const checkExistingUser = await User.findOne({
    where: { email: userData.email },
  });

  if (checkExistingUser) {
    throw new HttpErrors(409, 'User already registered');
  }

  const user = await User.create(userData);

  return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
};