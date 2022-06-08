const { User, Technology } = require("../db.js");
const createUser = async (email, name, employment_status, age, image, description, technologies, nationality, url, cv) => {
  try {
    const newUser = await User.create({
      email,
      name,
      employment_status,
      age,
      image,
      description,
      technologies,
      nationality,
      url,
      cv,
    });
    let userTechnologies = await Technology.findAll({
      where: { name: technologies },
    });
    await newUser.addTechnology(userTechnologies);
    return "Account created";
  } catch (error) {
    console.error("Error in createUser:", error);
  }
};
const findUser = async (user) => {
  const result = await User.findOne({ where: { name: user } });
  return result || {};
};

const getUsers = async () => {
  const users = await User.findAll({ include: Technology });
  return users;
};

module.exports = {
  createUser,
  findUser,
  getUsers,
};
