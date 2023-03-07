const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
const categoryService = require('./categoryService');
const { validateNewPost } = require('./validations/validations');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const checkCategories = async (categoryIds) => (
  Promise.all(categoryIds.map((id) => (
    categoryService.getById(id)
  )))
);

const createPost = async (postData, userId) => {
  validateNewPost(postData);
  const { title, content, categoryIds } = postData;

  await checkCategories(categoryIds);

  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({ title, content, userId },
      { transaction: t });

    await Promise.all(
      categoryIds.map((categoryId) => (
        PostCategory.create({ categoryId, postId: post.id },
          { transaction: t })
      )),
    );

    return post;
  });

  return result;
};

const getAll = async () => (
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  })
);

module.exports = {
  createPost,
  getAll,
};