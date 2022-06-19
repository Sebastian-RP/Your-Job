import style from "./Post.module.css";

function getTimeAgo(hours) {
  let timeAgo = hours;
  if (Math.floor(timeAgo) >= 1) {
    return Math.floor(timeAgo) + " hours";
  } else if (timeAgo * 60 >= 1) {
    return Math.floor(timeAgo * 60) + " minutes ago";
  } else {
    return "Few seconds ago";
  }
  return timeAgo;
}

export default function Post({ data }) {
  const { user, content, title, likes, dislikes, comments, createdAt } = data;
  const date = new Date();
  const createdTime = createdAt;
  const currentTime = date.toISOString(date.getDate());
  const time = (new Date(currentTime).getTime() - new Date(createdTime).getTime()) / 1000 / 60 / 60;

  return (
    <>
      <li className={style.post}>
        <div className={style.profile}>
          <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" />
          <p>{user}</p>
          <p>{getTimeAgo(time)}</p>
          <button className={style.button}>Follow</button>
        </div>
        <div className={style.container}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.description}>{content}</p>
          <button className={style.button}>Know more</button>
          <ul className={style.menu__interaction}>
            <li>
              <i className="fa-regular fa-message"></i> {comments.length}
            </li>
            <li>
              <i className="fa-regular fa-heart"></i> {likes}
            </li>
            <li>
              <i className="fa-regular fa-face-angry"></i> {dislikes}
            </li>
          </ul>
        </div>
      </li>
      <hr />
    </>
  );
}
