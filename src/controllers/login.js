const { loginService } = require('../services');

module.exports = async (req, res) => {
  const token = await loginService(req.body);

  return res.status(200).json({ token });
};