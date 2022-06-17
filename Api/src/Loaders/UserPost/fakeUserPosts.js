const { createPostUser } = require("../../Controllers/UserPostController");
const { fakeUserPostsData } = require("./arrayUserPosts")

const loaderUserPostData = async () => {
    try {
        fakeUserPostsData.forEach(user => {
            createPostUser(user[0], user[1], user[2]);
        })
        console.log("data PostUser cargada");
    } catch (error) {
        console.log( error );
    }
}

module.exports = {
    loaderUserPostData
}