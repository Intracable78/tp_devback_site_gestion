'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Reservation.belongsTo(models.User, {
        foreignKey: { 
          allowNull: false,
        }
      })


      models.Reservation.belongsTo(models.Lesson, {
        foreignKey: { 
          allowNull: false,
        }
      })
    }
  };
  Reservation.init({
    slug: DataTypes.STRING,
    date_payment: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    lesson_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};