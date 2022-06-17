const { createUser } = require("../../Controllers/UserController.js")
const { fakeUserData } = require("./arrayUser")

const loaderUserData = async () => {
    try {
        fakeUserData.forEach(user => {
            createUser(user[0], user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8], user[9], user[10])
        })
        console.log("data user cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderUserData
}