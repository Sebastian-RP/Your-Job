const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "CommentForumPosts",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: { type: DataTypes.STRING, allowNull: false },
      picture: { type: DataTypes.STRING, defaultValue: "" },
    },
    { timestamps: true }
  );
};
