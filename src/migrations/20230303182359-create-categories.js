module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  ),

  down: async (queryInterface, _Sequelize) => (
    queryInterface.dropTable('categories')
  ),
};
