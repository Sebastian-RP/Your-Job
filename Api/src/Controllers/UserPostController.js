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
      const timeA = A.createdAt.getMinutes();
      let diff = now.getMinutes() - timeA;

      if (A.user.premium === 1 || A.user.premium === 3)
        diff = Math.floor(diff / 2);
      if (diff < 3) return Priority[0].push(A);
      if (3 <= diff < 6) return Priority[1].push(A);
      if (6 <= diff < 10) return Priority[2].push(A);
      if (10 <= diff < 13) return Priority[3].push(A);
      if (diff >= 13) return Priority[4].push(A);
    });
    Priority = Priority.map((A) => {
      A.sort((a, b) => {
        if (
          a.user.premium === 1 ||
          (a.user.premium === 3 && b.user.premium !== 1) ||
          b.user.premium !== 3
        )
          return -1;
        if (
          a.user.premium !== 1 ||
          (a.user.premium !== 3 && b.user.premium === 1) ||
          b.user.premium === 3
        )
          return 1;
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
  try {
    const userDelete = await UserPost.findByPk(id);
    await userDelete?.update({ status: "disabled" });
    return userDelete;
  } catch (error) {
    console.error(error);
  }
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
