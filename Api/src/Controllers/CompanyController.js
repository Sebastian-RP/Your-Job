const { Company, User } = require("../db.js");
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
      premium
    });
    return "Company account created";
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
  return company;
};

const getEmployees = async (ids) => {
  const employees = [];
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    let employee = await User.findByPk(element);
    employees.push(employee);
  }
  return employees;
};

module.exports = {
  createCompany,
  getCompanies,
  getEmployees,
  findCompany,
};
