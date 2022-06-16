"use strict";

const Chance = require("chance");
const chance = new Chance();

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "postulates",
      [
        {
          name: "Juan Pablo Martinez",
          url: "usuarioMartinez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 1,
        },
        {
          name: "Juan Pablo Martinez",
          url: "usuarioMartinez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 2,
        },
        {
          name: "Juan Pablo Martinez",
          url: "usuarioMartinez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 3,
        },
        {
          name: "Ana Maria Hernandez",
          url: "usuarioHernandez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 4,
        },
        {
          name: "Ana Maria Hernandez",
          url: "usuarioHernandez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 5,
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 6,
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 7,
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 8,
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 9,
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 10,
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 11,
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 12,
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 13,
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 14,
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 15,
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 16,
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 17,
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 18,
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 19,
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          companyPostId: 20,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
