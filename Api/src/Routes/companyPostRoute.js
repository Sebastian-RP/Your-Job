const { Router } = require("express");
const { getCompanyPosts, createPost } = require("../Controllers/companyPostController.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getCompanyPosts());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post("/", async(req, res) => {
  const { titlePost, experience, typeof_contract, descripcion, min_salary, max_salary, modality, technologiesId } = req.body;
  
  try {
    const newPost = await createPost(titlePost, experience, typeof_contract, descripcion, min_salary, max_salary, modality, technologiesId);
    res.status(200).send(newPost);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
