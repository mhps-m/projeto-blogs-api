const { postService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  const result = await postService.getById(id);

  res.status(200).json(result);
};