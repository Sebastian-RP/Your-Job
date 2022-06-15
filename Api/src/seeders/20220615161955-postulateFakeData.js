'use strict';

const Chance = require('chance');
const chance = new Chance();

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
    await queryInterface.bulkInsert('postulates', [{
      name: "Juan Pablo Martinez",
      url: "usuarioMartinez@gmail.com",
      createdAt: new Date(), updatedAt: new Date(),
      companyPostId: chance.integer({ min: 0, max: 50 })
    },{
      name: "Juan Pablo Martinez",
      url: "usuarioMartinez@gmail.com",
      createdAt: new Date(), updatedAt: new Date(),
      companyPostId: chance.integer({ min: 0, max: 50 })
    },{
      name: "Juan Pablo Martinez",
      url: "usuarioMartinez@gmail.com",
      createdAt: new Date(), updatedAt: new Date(),
      companyPostId: chance.integer({ min: 0, max: 50 })
    },{
      name: "Ana Maria Hernandez",
      url: "usuarioHernandez@gmail.com",
      createdAt: new Date(), updatedAt: new Date(),
      companyPostId: chance.integer({ min: 0, max: 50 })
    },{
      name: "Ana Maria Hernandez",
      url: "usuarioHernandez@gmail.com",
      createdAt: new Date(), updatedAt: new Date(),
      companyPostId: chance.integer({ min: 0, max: 50 })
    },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
