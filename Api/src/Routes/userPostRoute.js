const { Router } = require("express");
const {
    getUserPosts,
    createPostUser
} = require("../Controllers/UserPostController");

const router = Router();

router.get("/", async (req, res) => {
    try {
      res.status(200).send(await getUserPosts());
    } catch (e) {
      res.status(404).send(e.message);
    }
});

router.post("/:id", async(req, res) => {
  const { id } = req.params;

  const { titlePost, descripcion } = req.body;

  try {
    res.status(200).send(await createPostUser(titlePost, id, descripcion));
  } catch (error) {
    res.status(404).send(e.message);
  }
})

module.exports = router;