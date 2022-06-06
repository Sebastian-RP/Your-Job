const { Router } = require('express');;

const userRoutes = require('./userRoute.js');
const companyRoutes = require('./companyRoute.js');
const technologyRoutes = require('./technologyRoute.js');


const router = Router()

router.use("/users", userRoutes);
router.use("/company", companyRoutes);
router.use("/technology", technologyRoutes);

module.exports = router;
