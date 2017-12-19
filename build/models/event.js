'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  Event.associate = function (models) {
    Event.belongsTo(models.Center, { foreignKey: 'centerId', as: 'centers' });
    Event.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Event;
};
//# sourceMappingURL=event.js.map