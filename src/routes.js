const login = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUsers = require('./controllers/getUsers');
const getUserById = require('./controllers/getUserById');

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
};