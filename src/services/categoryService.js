// const HttpErrors = require('http-errors');
const { Category } = require('../models');
const { validateNewCategory } = require('./validations/validations');

const createCategory = async (categoryData) => {
  validateNewCategory(categoryData);

  const newCategory = await Category.create(categoryData);

  return newCategory;
};

const getAll = async () => Category.findAll();

module.exports = {
  createCategory,
  getAll,
};