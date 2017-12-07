import moment from 'moment'

export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventdate: {
      type: DataTypes.DATE,
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
    Event.belongsTo(models.Center, { foreignKey: 'centerId', as: 'centers' });
    Event.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Event;
};

