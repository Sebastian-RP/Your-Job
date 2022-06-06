const { Technology } = require("../db.js")

let tecnologias = ["Javascript", "React", "Redux", "HTML5", "CSS3", "Boostrap", "Jquery"]


const getTechnologies = async () => {
    try{
        let technologiesToDB = tecnologias.forEach(tech=> {
            Technology.create({
                where: {name : tech.trim()}
            })
        })
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