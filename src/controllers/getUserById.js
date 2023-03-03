const { userService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  res.status(200).json(user);
};