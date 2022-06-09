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
    await queryInterface.bulkInsert('companyPosts', [{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino fijo", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", companyId: chance.integer({ min: 1, max: 20 }),
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
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
