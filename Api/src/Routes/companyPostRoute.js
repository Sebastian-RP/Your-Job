const { Router } = require("express");
const {
  getCompanyPosts,
  createPost,
  deletePost,
  getPostsfromCompany,
} = require("../Controllers/companyPostController.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getCompanyPosts());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await getPostsfromCompany(id));
});

router.post("/", async (req, res) => {
  const {
    titlePost,
    experience,
    typeof_contract,
    descripcion,
    min_salary,
    max_salary,
    modality,
    technologiesId,
  } = req.body;

  try {
    if (min_salary > max_salary)
      res.status(404).send("El salario mínimo no puede ser mayor al máximo");
    if (max_salary <= 0 && min_salary <= 0)
      res
        .status(404)
        .send("El salario mínimo o máximo deben ser numeros enteros positivos");

    if (
      titlePost &&
      typeof_contract &&
      descripcion &&
      modality &&
      technologiesId
    ) {
      const newPost = await createPost(
        titlePost,
        experience,
        typeof_contract,
        descripcion,
        min_salary,
        max_salary,
        modality,
        technologiesId
      );
      res.status(200).json(newPost);
    } else res.status(404).send("Faltan poner datos para el posteo");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await deletePost(id));
});

module.exports = router;
