const { CompanyPost } = require("../db.js")

const getCompanyPosts = async() => {
    try {
        const PostCreated = await CompanyPost.findAll();
        return PostCreated;
    } catch (error) {
        console.error("Error in getCompanyPosts:", error.message);
    }
};

module.exports = {
    getCompanyPosts
}