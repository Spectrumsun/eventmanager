export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    eventdate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },

  });
  Event.associate = (models) => {
    Event.belongsTo(models.Center, { foreignKey: 'centerId', as: 'centers', onDelete: 'SET NULL' });
    Event.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Event;
};

