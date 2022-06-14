const { Postulates } = require("../db.js");

const postulatesPost = async (name, url, postId) => {
    try {
        await Postulates.create({
            name,
            url,
            companyPostId : postId
        })

        return "Successful postulation";

    } catch (error) {
        console.error("Your application has not been successful")
        
    }
}

const getPostulates = async (email) => {
    try {
        const allPostulates = await Postulates.findAll({
            where : {
               url: email
            }
        })
        return allPostulates;
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    postulatesPost,
    getPostulates
}