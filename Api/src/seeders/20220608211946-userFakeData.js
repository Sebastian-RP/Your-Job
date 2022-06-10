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
     Example:
    await queryInterface.bulkInsert('users', [{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "CSS3", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "JavaScript"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Java", "C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["MySQL", "Java", "Python"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["SQLite", "JavaScript", "C"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Java", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["PostgreSQL", "MongoDB", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "CSS3", "C#", "MySQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C", "C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", 'MongoDB'], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Python", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "MongoDB", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Python", "MongoDB"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C", "C#", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "C#", "HTML"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "MongoDB", "Java", "CSS3"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "CSS3", "Java", "C"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "JavaScript", "SQLite", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Java", "Python", "C"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "MySQL", "MariaDB"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["MySQL", "Java", "Python"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["SQLite", "MongoDB", "PostgreSQL", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Java", "MongoDB", "JavaScript", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["PostgreSQL", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["HTML", "C#", "MySQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Python"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Oracle", "MySQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Python", "Oracle", "SQLite"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C", "C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "Java", "SQLite", "MySQL", "MariaDB", "PostgreSQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["Python", "MariaDB"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["C", "C#", "Java", "SQLite"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["JavaScript", "Python","C#", "HTML"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologiesName: ["SQLite", "MongoDB", "Oracle", "MySQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
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