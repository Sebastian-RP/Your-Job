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
            "status"
          ],
        },
        where: { status: "active" }
      });
      return allPosts;
    } catch (error) {
      console.error("Error in getUserPosts:", error.message);
    }
};

const createPostUser = async(
  titlePost,
  userId,
  descripcion,
) => {
  try {
    await UserPost.create({
      titlePost,
      userId,
      descripcion
    })
  } catch (error) {
    console.error("Error in createUserPost:", error.message);
  }
};

const deleteUserPost = async (id) => {
  const user = await getUserPosts();
  const userDelete = user.find(u => u.id === parseInt(id))
  await userDelete.update({ status: "disabled" });
  return userDelete;
}

module.exports = {
    getUserPosts,
    createPostUser,
    deleteUserPost
};
  