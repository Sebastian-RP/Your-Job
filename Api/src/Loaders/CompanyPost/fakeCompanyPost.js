const { createPost } = require("../../Controllers/companyPostController.js");
const { fakeCompanyPostData } = require("./arrayCompanyPosts");
const { getIds } = require("./arrayCompanyPosts");

const loaderCompanyPostData = async () => {

    try {
        getIds();
        fakeCompanyPostData.forEach(user => {
            createPost(user[0], user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8])
        })
        console.log("data companyPost cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderCompanyPostData,
}