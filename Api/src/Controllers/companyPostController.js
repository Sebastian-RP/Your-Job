const { CompanyPost } = require("../db.js");

const getCompanyPosts = async () => {
  try {
    const PostCreated = await CompanyPost.findAll();
    return PostCreated;
  } catch (error) {
    console.error("Error in getCompanyPosts:", error.message);
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
};
