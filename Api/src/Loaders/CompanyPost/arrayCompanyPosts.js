const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();
const { Company } = require("../../db")
let idsCompany = [];//uuid de las compañias creadas
async function getIds() {
  const companies = await Company.findAll({
    attributes: ["id"],
  });

  companies.forEach(comp => {
    idsCompany.push(comp.dataValues.id)
  });

  console.log(idsCompany.length + " compañias agregadas");


  const fakeCompanyPostData = [
    [chance.sentence(), "Training", "Indeterminate",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[0]
    ],
    [chance.sentence(), "Junior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[1]
    ],
    [chance.sentence(), "Semi-Senior", "termino fijo",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[2]
    ],
    [chance.sentence(), "Senior", "termino indefinido",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[3]
    ],
    [chance.sentence(), "Training", "Indeterminate",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[4]
    ],
    [chance.sentence(), "Junior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[5]
    ],
    [chance.sentence(), "Semi-Senior", "termino fijo",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[6]
    ],
    [chance.sentence(), "Senior", "termino indefinido",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[7]
    ],
    [chance.sentence(), "Training", "Indeterminate",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[8]
    ],
    [chance.sentence(), "Junior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[9]
    ],
    [chance.sentence(), "Semi-Senior", "termino fijo",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[10]
    ],
    [chance.sentence(), "Senior", "termino indefinido",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[11]
    ],
    [chance.sentence(), "Training", "Indeterminate",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[12]
    ],
    [chance.sentence(), "Junior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[13]
    ],
    [chance.sentence(), "Senior", "termino indefinido",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[14]
    ],
    [chance.sentence(), "Training", "Indeterminate",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Remote",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[15]
    ],
    [chance.sentence(), "Training", "termino indefinido",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[15]
    ],
    [chance.sentence(), "Junior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[16]
    ],
    [chance.sentence(), "Training", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[16]
    ],
    [chance.sentence(), "Senior", "Seasonal",
    chance.paragraph(), chance.integer({ min: 10, max: 50 }),
    chance.integer({ min: 50, max: 120 }), "Presential",
    [chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 }), chance.integer({ min: 1, max: 11 })],
    idsCompany[16]
    ],
  ];

  return fakeCompanyPostData
}


module.exports = {
  getIds
};