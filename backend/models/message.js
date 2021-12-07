'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Lesson.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false,
        }
      })
    }
  };
  Message.init({
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};