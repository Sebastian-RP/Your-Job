const { Company, User } = require("../db.js");
const { getPostulatebyId } = require("./postulatesController.js");
const { findUserId, findUserEmail } = require("./UserController.js");
// const User = require("../models/User.js");

const createCompany = async (
  email,
  name,
  phone,
  propietary_name,
  address,
  url,
  image,
  nationality,
  description,
  employees,
  premium
) => {
  try {
    const newCompany = await Company.create({
      email,
      name,
      phone,
      propietary_name,
      address,
      url,
      image,
      nationality,
      description,
      employees,
      premium,
    });

    return newCompany;
  } catch (error) {
    console.error("Error in createCompany:", error.message);
  }
};

const getCompanies = async () => {
  const companies = await Company.findAll({
    where: { status: "active" },
  });
  return companies;
};

const findCompany = async (id) => {
  const company = await Company.findByPk(id);
  if (company && company.status === "disabled")
    return { warning: "company deleted" };
  return company || { error: "company not found" };
};

const findCompanyEmail = async (email) => {
  const company = await Company.findOne({ where: { email: email } });
  if (company && company.status === "disabled")
    return { warning: "company deleted" };
  return company || { error: "company not found" };
};

const findCompanyName = async (name) => {
  const company = await Company.findOne({ where: { name: name } });
  if (company && company.status === "disabled")
    return { warning: "company deleted" };
  return company || { error: "company not found" };
};

const getEmployees = async (ids) => {
  const employees = [];
  for (let i = 0; i < ids?.length; i++) {
    const element = ids[i];
    let employee = await findUserId(element);
    employees.push(employee);
  }
  return employees;
};

const deleteCompany = async (id) => {
  const company = await findCompany(id);
  await company.update({ status: "disabled" });
  return company;
};

const updateCompany = async (email, changes) => {
  let company = await findCompanyEmail(email);
  await company.update(changes);
  return company;
};

const hireUser = async (userId, companyId) => {
  let company = await findCompany(companyId);
  let postulation = await getPostulatebyId(userId);
  let user = await findUserEmail(postulation.url);

  await company.employees.push(parseInt(user.id));
  company.changed("employees", true);
  console.log(company.changed());

  await company.save();
  await postulation.destroy();
  console.log(company.employees);

  let upcompany = await findCompany(companyId);
  return upcompany.employees;
};

const fireEmployee = async (employeeId, companyId) => {
  let company = await findCompany(companyId);
  // let user = await findUserId(employeeId)
  if (company.employees.includes(parseInt(employeeId))) {
    let index = company.employees.indexOf(parseInt(employeeId));
    company.employees.splice(index, 1);
  }
  company.changed("employees", true);
  console.log(company.changed());

  await company.save();
  return company;
};

module.exports = {
  createCompany,
  getCompanies,
  getEmployees,
  findCompany,
  findCompanyEmail,
  deleteCompany,
  updateCompany,
  findCompanyName,
  hireUser,
  fireEmployee,
};
