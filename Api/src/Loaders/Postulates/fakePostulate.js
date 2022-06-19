const { postulatesPost } = require("../../Controllers/postulatesController");
const { fakePostulatesData } = require("./arrayPostulates")

const loaderPostulatesData = async () => {
    try {
        fakePostulatesData.forEach(user => {
            postulatesPost(user[0], user[1], user[2]);
        })
        console.log("data postulates cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderPostulatesData
}