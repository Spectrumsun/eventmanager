import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' },
        is: {
          args: /([A-Za-z])+/,
          msg: 'Fullname can only contain strings'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'Enter a Valid Email Address' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      alidate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }
      }
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
    },
  }, {

  });
  User.associate = (models) => {
    User.hasMany(models.Event, { foreignKey: 'userId', as: 'events' }); // associations can be defined here
  };
  return User;
};

