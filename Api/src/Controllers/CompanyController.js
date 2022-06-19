const { Company, User } = require("../db.js");
const { findUserId } = require("./UserController.js");
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
  const companies = await Company.findAll();
  return companies;
};

const findCompany = async (id) => {
  const company = await Company.findByPk(id);
  return company || { error: "company not found" };
};

const findCompanyEmail = async (email) => {
  const company = await Company.findOne({ where: { email: email } });
  return company || { error: "company not found" };
};

const getEmployees = async (ids) => {
  const employees = [];
  for (let i = 0; i < ids.length; i++) {
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

module.exports = {
  createCompany,
  getCompanies,
  getEmployees,
  findCompany,
  findCompanyEmail,
  deleteCompany,
};
