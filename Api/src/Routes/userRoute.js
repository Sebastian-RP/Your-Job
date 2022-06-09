const { Router } = require("express");
const { createUser, findUser, getUsers } = require("../Controllers/UserController.js");

const router = Router();

router.post("/login", async (req, res) => {
  const { email, name, employment_status, age, image, description, technologiesName, nationality, url, cv } = req.body;
  const newUser = await createUser(email, name, employment_status, age, image, description, technologiesName, nationality, url, cv);
  return res.status(200).send(newUser);
});

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  res.send(await findUser(user));
});
router.get("/", async (req, res) => {
  res.send(await getUsers());
});

module.exports = router;
