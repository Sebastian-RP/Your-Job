const { Router } = require("express");
const { getPosts, getPost, createPost, createComment, notificationPost, getNotifications, deleteNotification } = require("../Controllers/forumController");

const router = Router();

router.get("/posts", async (req, res) => {
  res.send(await getPosts());
});

router.get("/post/:title", async (req, res) => {
  const { title } = req.params;
  res.send(await getPost(title));
});
router.post("/post", async (req, res) => {
  const { title, content, user, picture } = req.body;
  res.send(await createPost(title, content, user, picture));
});

router.post('/comment', async (req, res) => {
  const {id, content, user, picture} = req.body;
  res.send(await createComment(id, content, user, picture))
})

router.post('/notification', async (req, res) => {
  const { user, title, id } = req.body;
  res.send(await notificationPost(user, title, id))
})

router.get('/notification/:user', async (req, res) => {
  const { user } = req.params;
  res.send(await getNotifications(user))
})

router.delete('/notification/:user', async (req, res) => {
  const { user } = req.params;
  res.send(await deleteNotification(user))
})

router.put("/post", (req, res) => {
  res.send("Update Post");
});

router.delete("/post", (req, res) => {
  res.send("Disable Post");
});

module.exports = router;
