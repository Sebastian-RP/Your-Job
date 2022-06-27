const { Postulates, Company } = require("../db.js");

const postulatesPost = async (name, url, postId, companyId) => {
  try {
    await Postulates.create({
      name,
      url,
      companyPostId: postId,
      companyId,
    });

    return "Successful postulation";
  } catch (error) {
    console.error("Your application has not been successful");
  }
};

const getPostulates = async (email) => {
  try {
    const allPostulates = await Postulates.findAll({
      where: {
        url: email,
      },
    });
    console.log(allPostulates);
    return allPostulates;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostulatebyId = async (id) => {
  try {
    const postulate = await Postulates.findByPk(id);
    return postulate;
  } catch (error) {
    console.error("error un getPostulatebyId:", error.message);
  }
};

module.exports = {
  postulatesPost,
  getPostulates,
  getPostulatebyId,
};
