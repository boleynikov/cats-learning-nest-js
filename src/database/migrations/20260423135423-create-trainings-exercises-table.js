'use strict';

/** @type {import('sequelize-cli').Migration} */
const TABLE_NAME = 'TrainingExercises';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trainingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Trainings',
          key: 'id'
        }
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Exercises',
          key: 'id'
        }
      },
      sets: { type: Sequelize.INTEGER },
      reps: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
