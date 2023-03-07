const { postService } = require('../services');

module.exports = async (req, res) => {
  const userId = req.user.id;

  const post = await postService.createPost(req.body, userId);

  res.status(201).json(post);
};