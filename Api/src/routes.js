const { Router } = require("express");

const userRoutes = require("./Routes/userRoute.js");
const reportRoutes = require("./Routes/reportRoutes.js");
const companyRoutes = require("./Routes/companyRoute.js");
const technologyRoutes = require("./Routes/technologyRoute.js");
const companyPostRoutes = require("./Routes/companyPostRoute.js");
const conversationRoutes = require("./Routes/conversationsRoute.js");
const postulatesRoutes = require("./Routes/postulatesRoute.js");
const userPostRoutes = require("./Routes/userPostRoute.js");
const forumRoutes = require("./Routes/forumRoutes.js");

const router = Router();

router.use("/users", userRoutes);
router.use("/report", reportRoutes);
router.use("/company", companyRoutes);
router.use("/technology", technologyRoutes);
router.use("/companyPost", companyPostRoutes);
router.use("/conversation", conversationRoutes);
router.use("/postulates", postulatesRoutes);
router.use("/userPost", userPostRoutes);
router.use("/forum", forumRoutes);

router.use("*", (req, res) => {
  res.status(404).send({ error: "page not found" });
});

module.exports = router;
