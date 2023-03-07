const postService = require('../services/postService');

module.exports = async (req, res) => {
  const postId = req.params.id;
  const updates = req.body;
  const userId = req.user.id;

  const result = await postService.update(postId, updates, userId);

  res.status(200).json(result);
};