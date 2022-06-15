const { CompanyPost, Company, Postulates, Op } = require("../db.js");
const { findCompany } = require("./CompanyController.js");

const getCompanyPosts = async () => {
  try {
    const PostCreated = await CompanyPost.findAll({
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
        ],
      },
    });

    return PostCreated;
  } catch (error) {
    console.error("Error in getCompanyPosts:", error.message);
  }
};

const getPostsfromCompany = async (id) => {
  try {
    const company = await findCompany(id);
    console.log(company.posts);
    // const posts = await company.posts.map(async (id) => {
    //   const post = await CompanyPost.findByPk(id);
    //   return post;
    // });
    let posts = [];
    for (let i = 0; i < company.posts.length; i++) {
      const id = company.posts[i];
      const post = await CompanyPost.findByPk(id, {
        include: [
          {
            model: Postulates,
            required: false,
            where: {
              companyPostId: { [Op.eq]: id },
            },
          },
        ],
      });
      posts.push(post);
    }
    return posts || { error: "posts not found" };
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
  technologiesId
) => {
  try {
    const newPost = await CompanyPost.create({
      titlePost,
      experience,
      typeof_contract,
      descripcion,
      min_salary,
      max_salary,
      modality,
      technologiesId,
    });

    return "Post created";
  } catch (error) {
    console.error("Error in createCompany:", error.message);
  }
};

const updatePostCompany = async (id, changes) => {
  let postFound = await CompanyPost.findByPk(id);
  await postFound.update(changes);
  return postFound;
}

const deletePost = async (id) => {
  try {
    const post = await CompanyPost.findByPk(id);
    await post.destroy();
    return post;
  } catch (error) {
    console.error("Error in createCompany:", error.message);
  }
};

module.exports = {
  getCompanyPosts,
  createPost,
  deletePost,
  getPostsfromCompany,
  updatePostCompany
};
