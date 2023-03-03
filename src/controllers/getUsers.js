const { userService } = require('../services');

module.exports = async (_req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};