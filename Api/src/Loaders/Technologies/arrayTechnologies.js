const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();

const fakeTechnologiesData = [
  ["C"], ["Java"], ["C#"], ["JavaScript"], ["Python"],
  ["MySQL"], ["Oracle"], ["PostgreSQL"], ["MariaDB"],
  ["MongoDB"], ["SQLite"]
];

module.exports = {
  fakeTechnologiesData,
};
