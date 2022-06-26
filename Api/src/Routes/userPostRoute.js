const { Router } = require("express");
const {
    getUserPosts,
    createPostUser,
    deleteUserPost,
    allPostsUser
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await deleteUserPost(id));
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  res.send(await allPostsUser(name))
})

module.exports = router;