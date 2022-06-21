const { Technology } = require("../db.js");

const tecnologias = ["Javascript", "React", "Redux", "HTML5", "CSS3", "Boostrap", "Jquery", "Java"];

const getTechnologies = async () => {
  try {
    // for (let i = 0; i < tecnologias.length; i++) {
    //   let [techX, created] = await Technology.findOrCreate({
    //     //findOrcreate, si agregamos una tecnologia existente no la duplique
    //     where: { name: tecnologias[i].trim() },
    //     default: {
    //       name: tecnologias[i].trim(),
    //     },
    //   });
    // }

    let technologies = await Technology.findAll({ where: { status:"active" } });

    technologies.sort((a, b) => {
      //ordedenado alfabeticaamente
      if (a.dataValues.name > b.dataValues.name) {
        return 1;
      }
      if (b.dataValues.name > a.dataValues.name) {
        return -1;
      }
      return 0;
    });

    return technologies;
  } catch (error) {
    console.error("Error in getTechnologies:", error.message);
  }
};

const createTechnologies = async (name) => {
  try {
    let [techX, created] = await Technology.findOrCreate({
      where: { name: name },
        default: {
          name: name,
        },
    })

    return created

  } catch (error) {
    console.error("Error in createTechnology:", error.message);
  }
}

const deleteTechnology = async (id) => {
  const technologies = await getTechnologies()
  const technology = technologies.find((tech) => tech.id === parseInt(id))
  await technology?.update({status:"disabled"})

  return await getTechnologies();
}

module.exports = {
  getTechnologies,
  createTechnologies,
  deleteTechnology
};
