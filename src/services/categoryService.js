const HttpErrors = require('http-errors');
const { Category } = require('../models');
const { newCategory } = require('./validations/schemas');
const validate = require('./validations/validate');

const createCategory = async (categoryData) => {
  validate(newCategory, categoryData);

  const category = await Category.create(categoryData);

  return category;
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