const { loaderCompanyData } = require("./Company/fakeCompany")
const { loaderUserData } = require("./User/fakeUser.js")
const { loaderTechnologyData } = require("./Technologies/fakeTechnologies.js")
const { loaderCompanyPostData } = require("./CompanyPost/fakeCompanyPost.js")
const { loaderUserPostData } = require("./UserPost/fakeUserPosts")
const { loaderPostulatesData } = require("./Postulates/fakePostulate")


const LoadData = async (force) => {

    if (force) {
        // solucionar el uuid random
      
        await loaderTechnologyData();
        await loaderUserData();
        await loaderCompanyData();
        // await loaderUserPostData()
        // loaderCompanyPostData(); //no usar hasta que se resuelva el uuid 
        // loaderPostulatesData();
    }

}


module.exports = {
    LoadData
};
  