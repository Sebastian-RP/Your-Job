const { ForumPosts, CommentForumPosts, NotificationPosts } = require("../db.js");
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

const notificationPost = async (user, title, id) => {
  try {
    await NotificationPosts.create({
      user,
      title,
      ForumPostId: id
    })
  }
  catch (error) {
    return({message: error.message})
  }
}

const getNotifications = async (user) => {
  try {
    const data = await NotificationPosts.findAll({
      where: {
        user
      },
      include: {
        model: ForumPosts,
        include: ["CommentForumPosts"]
      }
    })
   return data
  } catch (error) {
    return ({message: error.message})
  }
}

const deleteNotification = async (user) => {
  try {
    await NotificationPosts.destroy({
      where: {
        user
      }
    })
    return 'ok'
  } catch (error) {
    return ({message: error.message});
  }
}

module.exports = { getPosts, getPost, createPost, createComment, notificationPost, getNotifications, deleteNotification};
