const { Router } = require("express");
const { createPost } = require('../Controllers/PostController.js')

const router = Router();

router.post('/post', async (req, res) => {

    const {
        technologiesId,
        experience,
        typeof_contract,
        companyId,
        descripcion,
        min_salary,
        max_salary,
        modality
    } = req.body

    try {
        
        const newPost = await createPost(
            technologiesId,
            experience,
            typeof_contract,
            companyId,
            descripcion,
            min_salary,
            max_salary,
            modality
        )

        res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;