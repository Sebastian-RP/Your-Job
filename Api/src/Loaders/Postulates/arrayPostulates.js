const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const axios = require("axios");
const chance = new Chance();
let fakePostulatesData = [];
const getFakeData = async () => {
  let posts = await axios.get("http://localhost:3001/companyPost/");
  fakePostulatesData = [
    ["Juan Pablo Martinez", "usuarioMartinez@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Juan Pablo Martinez", "usuarioMartinez@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Juan Pablo Martinez", "usuarioMartinez@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Ana Maria Hernandez", "usuarioHernandez@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Ana Maria Hernandez", "usuarioHernandez@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Dario Nicolas Castiblanco", "usuarioCastiblanco@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Diego Esteban Zamudio", "usuarioZamudio@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Angie tatiana Triana", "usuarioTriana@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Angie tatiana Triana", "usuarioTriana@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Angie tatiana Triana", "usuarioTriana@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Karen Eleana Rios", "usuarioRios@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Karen Eleana Rios", "usuarioRios@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Karen Eleana Rios", "usuarioRios@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
    ["Karen Eleana Rios", "usuarioRios@gmail.com", posts.data[Math.round(Math.random() * posts.data.length - 1)].id],
  ];
  return fakePostulatesData;
};

module.exports = {
  fakePostulatesData: getFakeData(),
};
