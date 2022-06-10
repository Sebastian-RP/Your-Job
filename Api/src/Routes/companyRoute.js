const { Router } = require("express");
const {
  createCompany,
  getCompanies,
  getEmployees,
  findCompany,
} = require("../Controllers/CompanyController.js");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await getCompanies());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await findCompany(id));
});

router.get("/employees/:id", async (req, res) => {
  const { id } = req.params;
  const company = await findCompany(id);
  const ids = company.employees;
  res.send(await getEmployees(ids));
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
