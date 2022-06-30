const { CompanyPost, Company, Postulates, Op } = require("../db.js");
const { findCompany } = require("./CompanyController.js");

const getCompanyPosts = async () => {
  try {
    let PostCreated = await CompanyPost.findAll({
      include: {
        model: Company,
        attributes: [
          "id",
          "email",
          "name",
          "phone",
          "address",
          "url",
          "image",
          "nationality",
          "premium",
        ],
      },
      where: {
        status: "active",
      },
    });

    const now = new Date();
    let Priority = [[], [], [], [], []];

    PostCreated.forEach((A) => {
      const timeA = A.createdAt.getMinutes()
      let diff = now.getMinutes() - timeA;

      if (A.company.premium === 1 || A.company.premium === 3) diff = Math.floor(diff / 2);
      if (diff < 3) Priority[0].push(A);
      if (3 <= diff < 6) Priority[1].push(A);
      if (6 <= diff < 10) Priority[2].push(A);
      if (10 <= diff < 13) Priority[3].push(A);
      if (diff >= 13) Priority[4].push(A);
    });
    Priority = Priority.map((A) => {
      A.sort((a, b) => {
        if (a.company.premium === 1 || a.company.premium === 3 && b.company.premium !== 1 || b.company.premium !== 3) return -1;
        if (a.company.premium !== 1 || a.company.premium !== 3 && b.company.premium === 1 || b.company.premium === 3) return 1;
        return 0;
      });
      return A;
    });

    return Priority.flat();
  } catch (error) {
    console.error("Error in getCompanyPosts:", error.message);
  }
};

const getPostsfromCompany = async (id) => {
  try {
    const data = await CompanyPost.findAll({
      where: {
        companyId: id,
        status: "active",
      },
      include: ["postulates"],
    });

    return data || { error: "posts not found" };
  } catch (e) {
    console.error("Error in getPostsfromCompany:", e.message);
  }
};

const createPost = async (
  titlePost,
  experience,
  typeof_contract,
  descripcion,
  min_salary,
  max_salary,
  modality,
  technologiesId,
  companyId
) => {
  try {
    await CompanyPost.create({
      titlePost,
      experience,
      typeof_contract,
      descripcion,
      min_salary,
      max_salary,
      modality,
      technologiesId,
      companyId,
    });

    return "Post created";
  } catch (error) {
    console.error("Error in createCompanyPost:", error.message);
  }
};

const updatePostCompany = async (id, changes) => {
  let postFound = await CompanyPost.findByPk(id);
  await postFound.update(changes);
  return postFound;
};

const deleteCompanyPost = async (id) => {
  try {
    const post = await CompanyPost.findByPk(id);
    await post.update({ status: "disabled" });
    return post;
  } catch (error) {
    console.error("Error in deletePost:", error.message);
  }
};

module.exports = {
  getCompanyPosts,
  createPost,
  deleteCompanyPost,
  getPostsfromCompany,
  updatePostCompany,
};
