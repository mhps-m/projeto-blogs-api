const HttpErrors = require('http-errors');
const { Category } = require('../models');
const { validateNewCategory } = require('./validations/validations');

const createCategory = async (categoryData) => {
  validateNewCategory(categoryData);

  const newCategory = await Category.create(categoryData);

  return newCategory;
};

const getAll = async () => Category.findAll();

const getById = async (id) => {
  const category = await Category.findByPk(id);

  if (!category) {
    throw new HttpErrors(400, 'one or more "categoryIds" not found');
  }
};

module.exports = {
  createCategory,
  getAll,
  getById,
};