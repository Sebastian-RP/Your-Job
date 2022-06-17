const { Router } = require("express");
const { getTechnologies, createTechnologies } = require("../Controllers/TechnologyController.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getTechnologies());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    res.status(200).send(await createTechnologies(name));
  } catch (error) {
    res.status(404).send(e.message);
  }
})

module.exports = router;
