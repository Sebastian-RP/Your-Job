const { User, Technology } = require("../db.js");
const { getTechnologies } = require("../Controllers/TechnologyController.js");

const createUser = async (
  email,
  name,
  employment_status,
  age,
  image,
  description,
  technologiesName,
  nationality,
  url,
  cv,
  premium
) => {
  try {
    await getTechnologies();

    const newUser = await User.create({
      email,
      name,
      employment_status,
      age,
      image,
      description,
      technologiesName,
      nationality,
      url,
      cv,
      premium
    });
    let userTechnologies = await Technology.findAll({
      where: { name: technologiesName },
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

const updateUser = async (id, changes) => {
  let user = await User.findByPk(id);
  await user.update(changes);
  return user;
};

module.exports = {
  createUser,
  findUser,
  getUsers,
  updateUser,
};
