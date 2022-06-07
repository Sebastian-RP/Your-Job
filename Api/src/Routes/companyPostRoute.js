const { Router } = require("express");
const { getCompanyPosts } = require("../Controllers/companyPostController.js")

const router = Router();

router.get("/", async (req, res) => {
    try{
        res.status(200).send(await getCompanyPosts())
    } catch (e){
        res.status(404).send(e.message)
    }
})

module.exports = router;
