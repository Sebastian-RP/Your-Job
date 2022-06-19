const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();

const fakePostulatesData = [
  ["Juan Pablo Martinez","usuarioMartinez@gmail.com", 1],
  ["Juan Pablo Martinez", "usuarioMartinez@gmail.com", 2],
  ["Juan Pablo Martinez", "usuarioMartinez@gmail.com", 3],
  ["Ana Maria Hernandez", "usuarioHernandez@gmail.com", 4],
  ["Ana Maria Hernandez", "usuarioHernandez@gmail.com", 5],
  ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", 6,],
  ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", 7,],
  ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", 8,],
  ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", 9,],
  ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", 10,],
  ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", 11,],
  ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", 12,],
  ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", 13],
  ["Angie tatiana Triana", "usuarioTriana@gmail.com", 14,],
  ["Angie tatiana Triana", "usuarioTriana@gmail.com", 15],
  ["Angie tatiana Triana", "usuarioTriana@gmail.com", 16,],
  ["Karen Eleana Rios", "usuarioRios@gmail.com", 17,],
  ["Karen Eleana Rios", "usuarioRios@gmail.com", 18,],
  ["Karen Eleana Rios", "usuarioRios@gmail.com", 19,],
  ["Karen Eleana Rios", "usuarioRios@gmail.com", 20,],
];

module.exports = {
  fakePostulatesData,
};
