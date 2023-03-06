const { categoryService } = require('../services');

module.exports = async (_req, res) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
};