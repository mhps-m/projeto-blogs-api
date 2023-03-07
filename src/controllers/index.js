const login = require('./login');
const createUser = require('./createUser');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const createCategory = require('./createCategory');
const getCategories = require('./getCategories');
const createPost = require('./createPost');
const getPosts = require('./getPosts');
const getPostById = require('./getPostById');
const updatePost = require('./updatePost');

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
  createCategory,
  getCategories,
  createPost,
  getPosts,
  getPostById,
  updatePost,
};