const Sequelize = require('sequelize');
const HttpErrors = require('http-errors');
const { BlogPost, PostCategory, Category, User } = require('../models');
const categoryService = require('./categoryService');
const { validateNewPost, validateUpdatePost } = require('./validations/validations');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const checkCategories = async (categoryIds) => (
  Promise.all(categoryIds.map((id) => (
    categoryService.getById(id)
  )))
);

const checkUserIsAuthor = (post, userId) => {
  if (userId !== post.userId) {
    throw new HttpErrors(401, 'Unauthorized user');
  }
};

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

const getById = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!result) {
    throw new HttpErrors(404, 'Post does not exist');
  }

  return result;
};

const update = async (postId, updates, userId) => {
  validateUpdatePost(updates);
  
  const postToUpdate = await getById(postId);

  checkUserIsAuthor(postToUpdate, userId);

  await BlogPost.update(updates, {
    where: { id: postId },
  });

  const result = await getById(postId);

  return result;
};

module.exports = {
  createPost,
  getAll,
  getById,
  update,
};