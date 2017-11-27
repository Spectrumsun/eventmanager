export default (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  Admin.associate = (models) => {
    // associations can be defined here
  }
  return Admin
}

