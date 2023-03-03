const HttpErrors = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async ({ email, password }) => {
  if (!email || !password) {
    throw new HttpErrors(400, 'Some required fields are missing');
  }

  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) {
    throw new HttpErrors(400, 'Invalid fields');
  }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return token;
};