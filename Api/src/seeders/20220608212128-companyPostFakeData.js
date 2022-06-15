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
      typeof_contract: "por labor", 
      companyId: "aa93ab2c-90a3-43c2-9bb9-2fd992b68eeb",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "aa93ab2c-90a3-43c2-9bb9-2fd992b68eeb",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "01a3e498-8cf3-44a7-bc94-01a8422b61a6",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "01a3e498-8cf3-44a7-bc94-01a8422b61a6",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "f24d9e9e-883c-4062-ba99-6dc7bd04b5be",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "f24d9e9e-883c-4062-ba99-6dc7bd04b5be",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "c47ea95b-afa1-47cf-b148-a45a6ec71060",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "c47ea95b-afa1-47cf-b148-a45a6ec71060",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "4a939b84-9bbc-4bcb-b317-751816025e0d",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "termino indefinido", 
      companyId: "4a939b84-9bbc-4bcb-b317-751816025e0d",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "4e83d61f-feb1-4148-a4f8-f904006f8f5e",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "4e83d61f-feb1-4148-a4f8-f904006f8f5e",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino fijo", 
      companyId: "beaef743-4a01-479c-adaa-fb73c27b2a61",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "beaef743-4a01-479c-adaa-fb73c27b2a61",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "beaef743-4a01-479c-adaa-fb73c27b2a61",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "88b9e802-832e-4345-9137-0f934f54c572",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino indefinido", 
      companyId: "88b9e802-832e-4345-9137-0f934f54c572",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "88b9e802-832e-4345-9137-0f934f54c572",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "b47b73b9-40bd-4b93-a87b-690f5c56db48",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "b47b73b9-40bd-4b93-a87b-690f5c56db48",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "b4e6585f-281b-4f41-a5a5-01bff0d2c044",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "b4e6585f-281b-4f41-a5a5-01bff0d2c044",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "408c0954-5f6e-478e-ba14-17f6df40d01b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "408c0954-5f6e-478e-ba14-17f6df40d01b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "261a59f9-c26b-4293-a07d-7e9ec28423df",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "termino indefinido", 
      companyId: "261a59f9-c26b-4293-a07d-7e9ec28423df",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "70886253-9700-4d2c-ac95-f4437941a59a",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "70886253-9700-4d2c-ac95-f4437941a59a",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino indefinido", 
      companyId: "f39b9e55-42a8-4bd9-ade7-f9bee25d258b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "f39b9e55-42a8-4bd9-ade7-f9bee25d258b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "f39b9e55-42a8-4bd9-ade7-f9bee25d258b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "f39b9e55-42a8-4bd9-ade7-f9bee25d258b",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "b0fe5d28-c242-407e-b180-788cad71e28d",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "b0fe5d28-c242-407e-b180-788cad71e28d",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino indefinido", 
      companyId: "008c2705-63cf-445c-968a-327212f59a49",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "008c2705-63cf-445c-968a-327212f59a49",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "91e3a58d-da19-4a12-96b3-e7d3114d50f8",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "91e3a58d-da19-4a12-96b3-e7d3114d50f8",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "a19f5c0f-cdf7-442d-b893-cfa0cfc51641",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "a19f5c0f-cdf7-442d-b893-cfa0cfc51641",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "temporal", 
      companyId: "374f781d-9822-4d01-80bf-1e262efc2d16",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "374f781d-9822-4d01-80bf-1e262efc2d16",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "f9a3648e-cf17-4ff5-af53-e587c6a20101",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "temporal", 
      companyId: "f9a3648e-cf17-4ff5-af53-e587c6a20101",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "por labor", 
      companyId: "813b4c01-f5b8-4f08-ac90-1f7bd44f5c53",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "813b4c01-f5b8-4f08-ac90-1f7bd44f5c53",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "semi-senior",
      typeof_contract: "termino fijo", 
      companyId: "813b4c01-f5b8-4f08-ac90-1f7bd44f5c53",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "senior",
      typeof_contract: "termino indefinido", 
      companyId: "813b4c01-f5b8-4f08-ac90-1f7bd44f5c53",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "presencial",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    },{
      titlePost: chance.sentence(),experience: "trainig",
      typeof_contract: "termino fijo", 
      companyId: "aa93ab2c-90a3-43c2-9bb9-2fd992b68eeb",
      descripcion: chance.paragraph(), min_salary: chance.integer({ min: 10, max: 50 }),
      max_salary: chance.integer({ min: 50, max: 120 }), modality: "remoto",
      technologiesId: [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
      createdAt: new Date(), updatedAt: new Date()
    }, {
      titlePost: chance.sentence(),experience: "junior",
      typeof_contract: "temporal", 
      companyId: "aa93ab2c-90a3-43c2-9bb9-2fd992b68eeb",
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
