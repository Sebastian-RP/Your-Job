const { postulatesPost } = require("../../Controllers/postulatesController");
const { fakePostulatesData } = require("./arrayPostulates")

const loaderPostulatesData = async () => {
    try {
        fakePostulatesData.forEach(user => {
            postulatesPost("Karen Eleana Rios", "usuarioRios@gmail.com", 20);
        })
        console.log("data postulates cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderPostulatesData
}