module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Centers', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      centerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      facility: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      availability: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: queryInterface => queryInterface.dropTable('Centers'),
};
