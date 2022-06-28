const { Router } = require("express");
const {
  getReports,
  createReport,
  deleteReport,
} = require("../Controllers/ReportController");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getReports());
  } catch (error) {
    console.log("Error in getReports:", error.message);
  }
});

router.post("/", async (req, res) => {
  const { contentId, contentType, reasons } = req.body;
  try {
    res.send(await createReport(contentId, contentType, reasons));
  } catch (error) {
    console.log("Error in createReport:", error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.send(await deleteReport(id));
  } catch (error) {
    console.log("Error in deleteReport:", error.message);
  }
});

module.exports = router;
