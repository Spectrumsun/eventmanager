import moment from 'moment'

export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: { args: true, msg: 'date format not invalid! - make sure it is in YYYY-MM-DD format' },
        isAfter: { args: moment().add(1, 'day').toISOString(), msg: 'date format is invalid! - make sure it is not less than a day from now' },
        isBefore: { args: moment().add(30, 'day').toISOString(), msg: 'date format is invalid! - make sure it is not more than a month from now' },
      },
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
    Event.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Event;
};

