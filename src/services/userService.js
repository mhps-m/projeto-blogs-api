const HttpErrors = require('http-errors');
const { User } = require('../models');
const { validateNewUser } = require('./validations/validations');

const getAll = async () => User.findAll();

const getById = async (id) => {
  const user = User.findByPk(id);

  if (!user) throw new HttpErrors(404, 'User does not exist');

  return user;
};

const createUser = async (userData) => {
  validateNewUser(userData);

  const checkExistingUser = await User.findOne({
    where: { email: userData.email },
  });

  if (checkExistingUser) {
    throw new HttpErrors(409, 'User already registered');
  }

  const newUser = await User.create(userData);

  return newUser;
};

module.exports = {
  getAll,
  getById,
  createUser,
};