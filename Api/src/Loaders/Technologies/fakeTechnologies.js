const { createTechnologies } = require("../../Controllers/TechnologyController");
const { fakeTechnologiesData } = require("./arrayTechnologies")

const loaderTechnologyData = async () => {
    try {
        fakeTechnologiesData.forEach(user => {
            createTechnologies(user[0])
        })
        console.log("data technology cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderTechnologyData
}