const { UserPost, User, CompanyPost, Postulates } = require("../db.js");

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
          "status",
          "premium",
        ],
      },
      where: { status: "active" },
    });

    const now = new Date();
    let Priority = [[], [], [], [], []];

    allPosts.forEach((A) => {
      const timeA = Math.floor(
        Math.abs(Math.random() * A.createdAt.getSeconds())
      );
      let diff = now.getSeconds() - timeA;

      if (A.user.premium === 1) diff = Math.floor(diff / 2);
      if (diff < 6) Priority[0].push(A);
      if (6 <= diff < 10) Priority[1].push(A);
      if (10 <= diff < 13) Priority[2].push(A);
      if (13 <= diff < 17) Priority[3].push(A);
      if (diff >= 17) Priority[4].push(A);
    });
    Priority = Priority.map((A) => {
      A.sort((a, b) => {
        if (a.user.premium === 1 && b.user.premium !== 1) return -1;
        if (a.user.premium !== 1 && b.user.premium === 1) return 1;
        return 0;
      });
      return A;
    });

    return Priority;
  } catch (error) {
    console.error("Error in getUserPosts:", error.message);
  }
};

const createPostUser = async (titlePost, userId, descripcion) => {
  try {
    await UserPost.create({
      titlePost,
      userId,
      descripcion,
    });
  } catch (error) {
    console.error("Error in createUserPost:", error.message);
  }
};

const deleteUserPost = async (id) => {
  const userDelete = await UserPost.findByPk(id);
  await userDelete.update({ status: "disabled" });
  return userDelete;
};

const allPostsUser = async (nameUser) => {
  try {
    const dataUser = await CompanyPost.findAll({
      include: {
        model: Postulates,
        where: {
          name: nameUser,
        },
      },
    });
    return dataUser;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = {
  getUserPosts,
  createPostUser,
  deleteUserPost,
  allPostsUser,
};
