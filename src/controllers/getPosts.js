const postService = require('../services/postService');

module.exports = async (_req, res) => {
  const posts = await postService.getAll();

  res.status(200).json(posts);
};