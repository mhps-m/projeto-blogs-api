const login = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUsers = require('./controllers/getUsers');
const getUserById = require('./controllers/getUserById');
const createCategory = require('./controllers/createCategory');
const getCategories = require('./controllers/getCategories');
const createPost = require('./controllers/createPost');
const getPosts = require('./controllers/getPosts');
const getPostById = require('./controllers/getPostById');
const updatePost = require('./controllers/updatePost');

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