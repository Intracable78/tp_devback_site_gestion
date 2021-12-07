'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Config.belongsTo(models.Lesson, {
        foreignKey: 'lesson_id'
      })
    }
  };
  Config.init({
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    day: DataTypes.DATE,
    interval: DataTypes.DATE,
    state: DataTypes.STRING,
    lession_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    background_color: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Config',
  });
  return Config;
};