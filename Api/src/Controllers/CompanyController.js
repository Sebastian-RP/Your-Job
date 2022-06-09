const { Company } = require("../db.js");

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
  employees
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

module.exports = {
  createCompany,
  getCompanies,
};
