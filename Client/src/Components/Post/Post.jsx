import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentPost, getAllForumPost } from "../../Redux/Actions/Actions";
import style from "./Post.module.css";
import swal from 'sweetalert'

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
  const {id, user, content, title, CommentForumPosts = [], createdAt, picture, preview } = data;
  const date = new Date();
  const createdTime = createdAt;
  const currentTime = date.toISOString(date.getDate());
  const time = (new Date(currentTime).getTime() - new Date(createdTime).getTime()) / 1000 / 60 / 60;
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.myUser);
  const [valueComment, setValueComment] = useState('');
  const [error, setError] = useState(false);

  const handlerComment = () => {
    dispatch(createCommentPost({
      id, 
      content: valueComment, 
      user: selector.error?"Anonimous":selector.name, 
      picture: selector.image
    })).then(val => {
      if(!val.data.message && valueComment !== ""){
        dispatch(getAllForumPost());
        setComment(false);
        setError(false)
      }else {
        swal({
          title: "Oops!",
          text: "Something went wrong",
          icon: "warning",
        })
        if(valueComment === "") setError(true)
      }
      setValueComment("")
    })
  }

  return (
    <>
      <li className={style.post}>
        <div className={style.profile}>
          <img src={picture} className={style.profile__picture} alt="" />
          <p className={style.profile__user}>{user}</p>
          <p className={style.profile__time}>{getTimeAgo(time)}</p>
          <button
            className={`${style.button} ${style.follow}`}
            onClick={(e) => {
              if (preview) {
                e.preventDefault();
              } else {
                console.log("follow");
              }
            }}
          >
            Follow
          </button>
        </div>
        <div className={style.container}>
          <h4 className={style.title}>{preview && title.length <= 0 ? "Title is empty" : title}</h4>
          <p className={style.description}>{preview && content.length <= 0 ? "Content is empty" : content}</p>
          <button className={`${style.button} ${style.know}`}>Know more</button>
          <ul className={style.menu__interaction}>
            <li>
              <i className={"fa-regular fa-message " + style.commentIcon}></i> {CommentForumPosts.length}
            </li>
          </ul>
        </div>
      </li>
      {!comment&&<button onClick={() => setComment(true)}>Comment</button>}
      {comment&&<div className={style.comment}>
        <textarea name="comment" placeholder="Comment here" onChange={(e) => setValueComment(e.target.value)}/>
        {error&&<p style={{color:'red'}}>it's Empty</p>}
        <br />
        <div>

        <button onClick={handlerComment}>Send</button>
        <button onClick={() => {
          setError(false)
          setValueComment("")
          setComment(false)}}>Cancel</button>
        </div>
      </div>}
      <hr className={style.divition} />
    </>
  );
}
