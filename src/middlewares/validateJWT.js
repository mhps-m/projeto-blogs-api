// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');
const HttpErrors = require('http-errors');
const { userService } = require('../services');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

module.exports = async (req, _res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    throw new HttpErrors(401, 'Token not found');
  }

  const decoded = jwt.verify(token, secret, (err, dec) => {
    if (err) throw new HttpErrors(401, 'Expired or invalid token');

    return dec;
  });

  const user = await userService.getById(decoded.data.userId);

  req.user = user;

  next();
};
