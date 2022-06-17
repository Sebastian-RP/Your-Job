const { ForumPost } = require("../db.js");
const getPosts = async () => {
  return await ForumPost.findAll({});
};

const getPost = async (title) => {
  return await ForumPost.findOne({ where: { title } });
};

const createPost = async (title, content, user = "Jose") => {
  const [data, created] = await ForumPost.findOrCreate({ where: { title }, defaults: { title, content, user } });
  return data;
};

module.exports = { getPosts, getPost, createPost };
