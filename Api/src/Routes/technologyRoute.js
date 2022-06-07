const { Router } = require("express");
const { getTechnologies } = require("../Controllers/TechnologyController.js")

const router = Router();

router.get("/", async (req, res) => {
    try{
        res.status(200).send(await getTechnologies())
    } catch (e){
        res.status(404).send(e.message)
    }
})

module.exports = router;
