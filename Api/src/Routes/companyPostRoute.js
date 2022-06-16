const { Router } = require("express");
const {
  getCompanyPosts,
  createPost,
  deletePost,
  getPostsfromCompany,
  updatePostCompany
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

router.post("/:id", async (req, res) => {
  const { id } = req.params

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

  
  technologiesId.forEach(elem => {
    Number(elem)
  });
  
  try {
    if (Number(min_salary) > Number(max_salary)) {

      return res.status(404).send({message: "El salario mínimo no puede ser mayor al máximo"});
    }
    if (Number(max_salary) <= 0 && Number(min_salary) <= 0){

      return res
         .status(404)
         .send("El salario mínimo o máximo deben ser numeros enteros positivos");
    }

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
        Number(min_salary),
        Number(max_salary),
        modality,
        technologiesId, 
        companyId= id
      );
      res.status(200).json(newPost);
    } else res.status(404).send("Faltan poner datos para el posteo");
  } catch (error) {
    console.log(error);
  }
});


router.put("/id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  res.send(await updatePostCompany(id, changes));
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await deletePost(id));
});

module.exports = router;
