'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reset_password_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reset_password_request.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    }
      })
    }
  };
  reset_password_request.init({
    selector: DataTypes.STRING,
    hashed_token: DataTypes.STRING,
    requested_at: DataTypes.DATE,
    expire_at: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reset_password_request',
  });
  return reset_password_request;
};