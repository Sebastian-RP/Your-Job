const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();
// solucionar llave foranea companyId, el uuid debe corresponder a id de una empresa
const fakeCompanyPostData = [
  [chance.sentence(), "trainig", "por labor",
  chance.paragraph(), chance.integer({ min: 10, max: 50 }),
  chance.integer({ min: 50, max: 120 }), "remoto",
  [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
  "98440a38-5fc2-45cd-8ca2-c6d5e6a56c4b"
  ]
];

module.exports = {
  fakeCompanyPostData,
};
