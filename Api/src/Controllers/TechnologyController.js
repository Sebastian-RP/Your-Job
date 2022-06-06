const { Technology } = require("../db.js")

const getTechnologies = async () => {
    try{
        let technologies = Technology.findAll()
        technologies.map(x => x.name).sort()
        return technologies;
    } catch (error) {
        console.error("Error in getTechnologies:", error.message);
    }
}

module.exports = {
    getTechnologies
}