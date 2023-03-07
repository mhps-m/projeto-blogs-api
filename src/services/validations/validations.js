const HttpErrors = require('http-errors');
const { 
  newUserSchema,
  newCategorySchema,
  newPostSchema,
  updatePostSchema,
} = require('./schemas');

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);

  if (error) {
    throw new HttpErrors(400, error.message);
  }
};

const validateNewCategory = (category) => {
  const { error } = newCategorySchema.validate(category);

  if (error) {
    throw new HttpErrors(400, error.message);
  }
};

const validateNewPost = (post) => {
  const { error } = newPostSchema.validate(post);

  if (error) {
    throw new HttpErrors(400, 'Some required fields are missing');
  }
};

const validateUpdatePost = (updates) => {
  const { error } = updatePostSchema.validate(updates);

  if (error) {
    throw new HttpErrors(400, 'Some required fields are missing');
  }
};

module.exports = {
  validateNewUser,
  validateNewCategory,
  validateNewPost,
  validateUpdatePost,
};