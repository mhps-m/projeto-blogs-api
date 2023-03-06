const { categoryService } = require('../services');

module.exports = async (req, res) => {
  const newCategory = await categoryService.createCategory(req.body);

  res.status(201).json(newCategory);
};