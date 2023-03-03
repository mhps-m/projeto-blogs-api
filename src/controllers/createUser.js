const { loginService, userService } = require('../services');

module.exports = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  const token = await loginService(newUser);

  res.status(201).json({ token });
};