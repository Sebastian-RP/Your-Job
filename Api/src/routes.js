const { Router } = require("express");

const userRoutes = require("./Routes/userRoute.js");
const companyRoutes = require("./Routes/companyRoute.js");
const technologyRoutes = require("./Routes/technologyRoute.js");
const companyPostRoutes = require("./Routes/companyPostRoute.js");
const conversationRoutes = require("./Routes/conversationsRoute.js");
const postulatesRoutes = require("./Routes/postulatesRoute.js")

const router = Router();

router.use("/users", userRoutes);
router.use("/company", companyRoutes);
router.use("/technology", technologyRoutes);
router.use("/companyPost", companyPostRoutes);
router.use("/conversation", conversationRoutes);
router.use("/postulates", postulatesRoutes);

router.use("*", (req, res) => {
  res.status(404).send({ error: "page not found" });
});

module.exports = router;
