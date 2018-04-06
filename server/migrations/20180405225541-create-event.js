

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    eventName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    eventdate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    purpose: {
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
    centerId: {
      type: Sequelize.INTEGER,
      onDelete: 'set null',
      allowNull: false,
      references: {
        model: 'Centers',
        key: 'id',
        as: 'centerId',
      }
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      }
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events')
};
