const { Router } = require("express");
const { getPosts, getPost, createPost } = require("../Controllers/forumController");

const router = Router();

router.get("/posts", async (req, res) => {
  res.send(await getPosts());
});

router.get("/post", async (req, res) => {
  const { title } = req.query;
  res.send(await getPost(title));
});
router.post("/post", async (req, res) => {
  const { title, content, user, picture } = req.body;
  res.send(await createPost(title, content, user, picture));
});

router.put("/post", (req, res) => {
  res.send("Update Post");
});

router.delete("/post", (req, res) => {
  res.send("Disable Post");
});

module.exports = router;
