module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    })
  ),
  down: async (queryInterface, _Sequelize) => (
    queryInterface.dropTable('postsCategories')
  ),
};
