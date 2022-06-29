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
  premium,
  ocupation
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
        premium,
        ocupation
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
const findUser = async (username) => {
  const user = await User.findOne({ where: { name: username } });
  if (user && user.status === "disabled") return { warning: "user deleted" };
  return user || { error: "user not found" };
};

const findUserEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  if (user && user.status === "disabled") return { warning: "user deleted" };
  return user || { error: "user not found" };
};

const findUserId = async (id) => {
  const user = await User.findByPk(id);
  if (user && user.status === "disabled") return { warning: "user deleted" };
  return user || { error: "user not found" };
};

const getUsers = async () => {
  let users = await User.findAll({
    include: { model: Technology,
      through: {
          attributes: []
      }
    },
    where: { status: "active" },
  });
  users = users.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return users;
};

const updateUser = async (id, changes) => {
  let user = await User.findByPk(id);
  await user.update(changes);
  return user;
};

const deleteUser = async (id) => {
  let user = await findUserId(id);
  await user.update({ status: "disabled" });
  return user;
};

module.exports = {
  createUser,
  findUser,
  findUserEmail,
  findUserId,
  getUsers,
  updateUser,
  deleteUser,
};
