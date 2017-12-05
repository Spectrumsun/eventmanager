export default (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    centerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facility: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },

  });
  Center.associate = (models) => {
    Center.hasMany(models.Event, { foreignKey: 'centerId', as: 'events' });
    // associations can be defined here
  };
  return Center;
};

