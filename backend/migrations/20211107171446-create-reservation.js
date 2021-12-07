'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING
      },
      date_payment: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Users',
          key: 'id'
        }
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Lessons',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reservations');
  }
};