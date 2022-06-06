const { Router } = require("express");
const { createCompany } = require("../Controllers/CompanyController.js");

const router = Router();

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
