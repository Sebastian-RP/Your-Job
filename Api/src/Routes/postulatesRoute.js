const { Router } = require("express");

const { postulatesPost } = require("../Controllers/postulatesController.js");

const router = Router();

router.post('/', async (req, res) => {
    const {id, name, url, postId} = req.body;
    try {
        res.send(await postulatesPost(id, name, url, postId))
    } catch (error) {
        res.send({message: error.message});
    }
})

module.exports = router;