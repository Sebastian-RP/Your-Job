const { Router } = require("express");
const {
    getUserPosts
} = require("../Controllers/UserPostController");

const router = Router();

router.get("/", async (req, res) => {
    try {
      res.status(200).send(await getUserPosts());
    } catch (e) {
      res.status(404).send(e.message);
    }
});

module.exports = router;