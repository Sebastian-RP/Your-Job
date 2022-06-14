const { UserPost, User } = require("../db.js");

const getUserPosts = async () => {
    try {
      const allPosts = await UserPost.findAll({
        include: {
          model: User,
          attributes: [
            "id",
            "email",
            "name",
            "age",
            "url",
            "image",
            "nationality",
          ],
        },
      });
      return allPosts;
    } catch (error) {
      console.error("Error in getUserPosts:", error.message);
    }
};

module.exports = {
    getUserPosts
};
  