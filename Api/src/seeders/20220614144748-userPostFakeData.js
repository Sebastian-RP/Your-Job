'use strict';

const Chance = require('chance'); //genera datos aleatoriamente, para llenar los campos de la BD
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
    await queryInterface.bulkInsert('userPosts', [{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(), technologiesId: [chance.integer({ min: 1, max: 11 })], 
      userId: chance.integer({ min: 1, max: 40 }), descripcion: chance.paragraph(),
      createdAt: new Date(), updatedAt: new Date()
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
