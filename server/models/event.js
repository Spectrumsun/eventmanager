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
    center: {
      type: DataTypes.STRING,
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
    // associations can be defined here
  };
  return Event;
};

