"use strict";

const Chance = require("chance");
const { getAllPost } = require("../../../Client/src/Redux/Actions/Actions");
const chance = new Chance();
const axios = require("axios");
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
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Juan Pablo Martinez",
          url: "usuarioMartinez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Juan Pablo Martinez",
          url: "usuarioMartinez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Ana Maria Hernandez",
          url: "usuarioHernandez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Ana Maria Hernandez",
          url: "usuarioHernandez@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Dario Nicolas Castiblanco",
          url: "usuarioCastiblanco@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Diego Esteban Zamudio",
          url: "usuarioZamudio@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Angie tatiana Triana",
          url: "usuarioTriana@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
        },
        {
          name: "Karen Eleana Rios",
          url: "usuarioRios@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: "0b663634-2d18-4627-99b1-49b0482b1763",
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
