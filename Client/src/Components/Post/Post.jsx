import { useState } from "react";
import style from "./Post.module.css";
import CommentPost from "../CommentPost/CommentPost";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ReportForm from "../Report_Form/Report_Form";

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
  const {
    user,
    content,
    title,
    CommentForumPosts = [],
    createdAt,
    picture,
    preview,
  } = data;
  const date = new Date();
  const createdTime = createdAt;
  const currentTime = date.toISOString(date.getDate());
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
  const time =
    (new Date(currentTime).getTime() - new Date(createdTime).getTime()) /
    1000 /
    60 /
    60;
  const [showComment, setShowComment] = useState(false);
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      {showReport && (
        <ReportForm props={[setShowReport, "userPost", showReport]} />
      )}
      <li className={style.post}>
        <div className={style.profile}>
          <img src={picture} className={style.profile__picture} alt="" />
          <p className={style.profile__user}>{user}</p>
          <p className={style.profile__time}>{getTimeAgo(time)}</p>
          {(!loggedCompany.hasOwnProperty("error") ||
            !loggedUser.hasOwnProperty("error")) && (
            <Button
              className={style.ButtonDanger}
              variant="danger"
              onClick={() => {
                setShowReport(data.id);
              }}
            >
              Report
            </Button>
          )}
        </div>
        <div className={style.container}>
          <h4 className={style.title}>
            {preview && title.length <= 0 ? "Title is empty" : title}
          </h4>
          <p className={style.description}>
            {preview && content.length <= 0 ? "Content is empty" : content}
          </p>
          <button
            className={`${style.button} ${style.know}`}
            onClick={() => setShowComment(true)}
          >
            Know more
          </button>
          <ul className={style.menu__interaction}>
            <li>
              <i className={"fa-regular fa-message " + style.commentIcon}></i>{" "}
              {CommentForumPosts.length}
            </li>
          </ul>
        </div>
      </li>
      <hr className={style.divition} />
      {showComment && (
        <div className={style.containerComment}>
          <button
            className={style.cancelButton}
            onClick={() => setShowComment(false)}
          >
            Back
          </button>
          <CommentPost props={data} />
        </div>
      )}
    </>
  );
}
