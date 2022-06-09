const { Router } = require("express");
const {
  createCompany,
  getCompanies,
} = require("../Controllers/CompanyController.js");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await getCompanies());
});

router.post("/login", async (req, res) => {
  const {
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
  } = req.body;
  const newCompany = await createCompany(
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
  );
  return res.status(200).send(newCompany);
});

module.exports = router;
