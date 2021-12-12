'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Message);
      models.User.hasMany(models.Lesson)
      models.User.hasOne(models.reset_password_request);
      models.User.hasMany(models.Reservation);
      models.User.hasMany(models.Config)
    }
  };
  User.init({
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    username: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    remenber_token: DataTypes.STRING,
    reset_token: DataTypes.STRING,
    roles: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};