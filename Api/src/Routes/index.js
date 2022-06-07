const { Router } = require('express');

const userRoutes = require('./userRoute.js');
const companyRoutes = require('./companyRoute.js');
const technologyRoutes = require('./technologyRoute.js');
const companyPostRoutes = require('./companyPostRoute.js')

const router = Router()

router.use("/users", userRoutes);
router.use("/company", companyRoutes);
router.use("/technology", technologyRoutes);
router.use("/companyPost", companyPostRoutes);

router.use("*", (req, res)=>{
    res.status(404).send({error: "page not found"});
});

module.exports = router;
