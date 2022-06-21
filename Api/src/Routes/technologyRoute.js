const { Router } = require("express");
const { getTechnologies, createTechnologies, deleteTechnology } = require("../Controllers/TechnologyController.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getTechnologies());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    res.status(200).send(await deleteTechnology(id));
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
