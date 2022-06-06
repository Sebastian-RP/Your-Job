const { Router } = require("express");
const { createUser } = require("../Controllers/UserController.js");

const router = Router();

router.post("/login", async (req, res) => {
  const {
    email,
    name,
    employment_status,
    age,
    image,
    description,
    technologies,
    nationality,
    url,
    cv,
  } = req.body;
  const newUser = await createUser(
    email,
    name,
    employment_status,
    age,
    image,
    description,
    technologies,
    nationality,
    url,
    cv
  );
  return res.status(200).send(newUser);
});

module.exports = router;
