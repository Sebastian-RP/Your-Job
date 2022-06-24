const { Postulates, Company } = require("../db.js");

const postulatesPost = async (name, url, postId, companyId) => {
  try {
    console.clear();
    await Postulates.create({
      name,
      url,
      postId
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

module.exports = {
  postulatesPost,
  getPostulates,
};
