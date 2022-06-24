const { Router } = require("express");

const { postulatesPost, getPostulates } = require("../Controllers/postulatesController.js");

const router = Router();

router.post("/", async (req, res) => {
  const { name, url, postId, companyId } = req.body;
  console.log(Object.keys(req.body));
  try {
    res.send(await postulatesPost(name, url, postId, companyId));
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.send(await getPostulates());
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    res.send(await getPostulates(email));
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = router;
