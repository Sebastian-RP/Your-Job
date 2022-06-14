const { Postulates } = require("../db.js");

const postulatesPost = async (id, name, url, postId) => {
    try {
        await Postulates.create({
            id,
            name,
            url,
            companyPostId : postId
        })

        return "Successful postulation";

    } catch (error) {
        console.error("Your application has not been successful")
        
    }
}

module.exports = {
    postulatesPost
}