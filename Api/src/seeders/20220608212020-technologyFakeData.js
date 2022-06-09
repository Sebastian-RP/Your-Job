'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('technologies', [{
      name: 'C', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'Java', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'C#', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'JavaScript', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'Python', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'MySQL', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'Oracle', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'PostgreSQL', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'MariaDB', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'MongoDB', createdAt: new Date(), updatedAt: new Date()
    },{
      name: 'SQLite', createdAt: new Date(), updatedAt: new Date()
    },], {});
  },

  // eliminar data
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
