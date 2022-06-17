const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();

const fakePostulatesData = [
  ["Karen Eleana Rios",
  "usuarioRios@gmail.com",
  20],
];

module.exports = {
  fakePostulatesData,
};
