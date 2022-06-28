const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("report", {
    contentId: {
      type: DataTypes.STRING,
    },
    contentType: {
      type: DataTypes.ENUM(["user", "company", "userPost", "companyPost"]),
    },
    reasons: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    reportCount: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });
};
