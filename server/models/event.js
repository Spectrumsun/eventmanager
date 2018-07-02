export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
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
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      as: 'centers',
    });
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Event;
};

