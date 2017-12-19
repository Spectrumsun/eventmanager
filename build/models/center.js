'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Center = sequelize.define('Center', {
    centerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facility: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    }

  });
  Center.associate = function (models) {
    Center.hasMany(models.Event, { foreignKey: 'centerId', as: 'events' });
  };
  return Center;
};
//# sourceMappingURL=center.js.map