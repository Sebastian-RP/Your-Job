import style from "./Post.module.css";

function getTimeAgo(hours) {
  let timeAgo = hours;
  if (Math.floor(timeAgo) >= 1) {
    return Math.floor(timeAgo) + " hours ago";
  } else if (timeAgo * 60 >= 1) {
    return Math.floor(timeAgo * 60) + " minutes ago";
  } else {
    return "Few seconds ago";
  }
  return timeAgo;
}

export default function Post({ data }) {
  const { user, content, title, likes, dislikes, comments, createdAt, picture } = data;
  const date = new Date();
  const createdTime = createdAt;
  const currentTime = date.toISOString(date.getDate());
  const time = (new Date(currentTime).getTime() - new Date(createdTime).getTime()) / 1000 / 60 / 60;
  console.log(data);
  return (
    <>
      <li className={style.post}>
        <div className={style.profile}>
          <img src={picture} className={style.profile__picture} alt="" />
          <p className={style.profile__user}>{user}</p>
          <p className={style.profile__time}>{getTimeAgo(time)}</p>
          <button className={`${style.button} ${style.follow}`}>Follow</button>
        </div>
        <div className={style.container}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.description}>{content}</p>
          <button className={`${style.button} ${style.know}`}>Know more</button>
          <ul className={style.menu__interaction}>
            <li>
              <i className={"fa-regular fa-message " + style.commentIcon}></i> {comments.length}
            </li>
            <li>
              <i className={"fa-regular fa-heart " + style.likeIcon}></i> {likes}
            </li>
            <li>
              <i className={"fa-regular fa-face-angry " + style.dislikeIcon}></i> {dislikes}
            </li>
          </ul>
        </div>
      </li>
      <hr className={style.divition} />
    </>
  );
}
