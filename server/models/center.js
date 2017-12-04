export default (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    centerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
      }
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: true,
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

