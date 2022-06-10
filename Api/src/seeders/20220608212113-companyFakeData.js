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
      employees: [1, 2], posts: [1, 2], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [3,4], posts: [3, 4], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [5,6], posts: [5,6], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [7], posts: [7, 8], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [9, 10], posts: [9, 10], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [12], posts: [11, 12], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [13, 14], posts: [13, 14], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [15, 16], posts: [15, 16], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [17], posts: [17, 18], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [18,19], posts: [19,20], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [21, 22], posts: [21, 22, 23], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [23, 24], posts: [24, 25, 26], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [26], posts: [27, 28, 29], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [27, 28], posts: [30, 31, 32], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [29], posts: [33, 34, 35], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [31, 32], posts: [36, 37, 38], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [33, 35], posts: [39, 40, 41], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [36], posts: [42, 43, 44], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [38], posts: [45, 46, 47], 
      createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.company()+" company", 
      phone: chance.integer({ min: 10000000, max: 99999999 }), propietary_name: chance.name(), 
      address: chance.address(), url: chance.url(), image: chance.url({extensions: ['jpg', 'png']}), 
      nationality: chance.country({ full: true }), description: chance.sentence(),
      employees: [39, 40], posts: [48, 49, 50], 
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
