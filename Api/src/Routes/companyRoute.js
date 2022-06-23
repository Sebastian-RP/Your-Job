const { Router } = require("express");
const {
  createCompany,
  getCompanies,
  getEmployees,
  findCompany,
  findCompanyEmail,
  deleteCompany,
  updateCompany
} = require("../Controllers/CompanyController.js");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await getCompanies());
});

router.get("/profile", async (req, res) => {
  const { email } = req.query;
  res.send(await findCompanyEmail(email));
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
    premium,
    id,
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
    employees,
    premium,
    id
  );
  return res.status(200).send(newCompany);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await deleteCompany(id));
});

router.put("/:email", async (req, res) => {
  try{
    console.log("HOLA")
    const { email } = req.params;
    const changes = req.body;
    res.send(await updateCompany(email, changes));
  } catch (error) {
    console.log("Error in updateCompany:", error.message);
  }
});

module.exports = router;
