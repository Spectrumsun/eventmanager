export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Event.associate = (models) => {
    Event.belongsTo(models.Center, { foreignKey: 'centerId', as: 'centers', onDelete: 'SET NULL' });
    Event.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Event;
};

