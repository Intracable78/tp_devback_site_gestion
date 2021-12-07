'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
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
      models.Lesson.hasMany(models.Config);
      models.Lesson.hasMany(models.Reservation);
      models.Lesson.belongsTo(models.User, {
        foreignKey: { 
          allowNull: false,
        }
      })
    }
  };
  Lesson.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};