const { createCompany } = require("../../Controllers/CompanyController.js")
const { fakeUserData } = require("./arrayCompanies")

const loaderCompanyData = async () => {
    try {
        fakeUserData.forEach(user => {
            createCompany(user[0], user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8], user[9], user[10])
        })
        console.log("data Company cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderCompanyData
}