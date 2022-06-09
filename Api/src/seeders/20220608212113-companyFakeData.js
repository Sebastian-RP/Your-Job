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
    await queryInterface.bulkInsert('companies', [{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [1, 2], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [3,4], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [5,6], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [7], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [9, 10], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [12], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [13, 14], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [15, 16], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [17], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [18,19], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [21, 22], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [23, 24], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [26], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [27, 28], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [29], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [31, 32], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [33, 35], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [36], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [38], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [39, 40], posts: [1], 
      createdAt: new Date(), updatedAt: new Date()
    }], {});
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
