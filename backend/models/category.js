'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Category.hasMany(models.Lesson);
      models.Category.hasMany(models.Config);

    }
  };
  Category.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    file: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};