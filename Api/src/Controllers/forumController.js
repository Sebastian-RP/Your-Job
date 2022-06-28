const { ForumPosts, CommentForumPosts } = require("../db.js");
const getPosts = async () => {
  return await ForumPosts.findAll({
    include: ["CommentForumPosts"]
  });
};

const getPost = async (title) => {
  return await ForumPosts.findOne({ 
    where: { title },
    include: ["CommentForumPosts"]
  });
};

const createPost = async (title, content, user = "Jose", picture) => {
  const [data, created] = await ForumPosts.findOrCreate({ where: { title }, defaults: { title, content, user, picture } });
  return data;
};

const createComment = async (id, content, user, picture) => {
  try {
    await CommentForumPosts.create({
      content,
      user,
      picture,
      ForumPostId: id
    })
    return "post created successfully"
  } catch (error) {
    return ({message: error.message})
  }
}

module.exports = { getPosts, getPost, createPost, createComment};
