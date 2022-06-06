const { Router } = require('express');;

const userRoutes = require('./userRoute.js');
const companyRoutes = require('./companyRoute.js');

const router = Router()

router.use("/users", userRoutes);
router.use("/company", companyRoutes);

module.exports = router;
