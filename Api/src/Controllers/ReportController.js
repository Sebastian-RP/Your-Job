const { Report } = require("../db.js");

const getReports = async () => {
  const reportsUsers = await Report.findAll({ where: { contentType: "user" } });
  const reportsUsersPosts = await Report.findAll({
    where: { contentType: "userPost" },
  });
  const reportsCompanies = await Report.findAll({
    where: { contentType: "company" },
  });
  const reportsCompaniesPosts = await Report.findAll({
    where: { contentType: "companyPost" },
  });
  return [
    reportsUsers,
    reportsUsersPosts,
    reportsCompanies,
    reportsCompaniesPosts,
  ];
};

const createReport = async (contentId, contentType, reasons) => {
  try {
    const [report, created] = await Report.findOrCreate({
      where: {
        contentId: contentId,
        contentType: contentType,
      },
      defaults: {
        contentId,
        contentType,
        reasons,
      },
    });
    if (!created) await report.update({ reportCount: report.reportCount + 1 });
    return report;
  } catch (error) {
    console.error("Error in createReport:", error.message);
  }
};

const deleteReport = async (id) => {
  try {
    const report = await Report.findByPk(id);
    await report.destroy();
    return await getReports();
  } catch (error) {
    console.log("Error in deleteReport:", error.message);
  }
};

module.exports = {
  getReports,
  createReport,
  deleteReport,
};
