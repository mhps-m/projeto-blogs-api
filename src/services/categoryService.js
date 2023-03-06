// const HttpErrors = require('http-errors');
const { Category } = require('../models');
const { validateNewCategory } = require('./validations/validations');

const createCategory = async (categoryData) => {
  validateNewCategory(categoryData);

  const newCategory = await Category.create(categoryData);

  return newCategory;
};

module.exports = {
  createCategory,
};