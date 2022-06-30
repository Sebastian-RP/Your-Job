import style from "./Forum.module.css";
import { Link, useLocation } from "react-router-dom";
import Suggestions from "../../Components/Suggestions/Suggestions";
import ForumPosts from "../../Components/ForumPosts/ForumPosts";
import ForumCreatePost from "../../Components/ForumCreatePost/ForumCreatePost";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import NotificationPost from "../../Components/NotificationPost/NotificationPost";
import { deleteNotification, getAllNotificationPost } from "../../Redux/Actions/Actions";
export default function Forum() {
  const selector = useSelector(state => state.notificationPost);
  const selectorUser = useSelector(state => state.myUser);
  const isCreatingPost = !useLocation().pathname.split("/").includes("create");
  const { isAuthenticated, user } = useAuth0();
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  const handlerBackNotification = () => {
    dispatch(deleteNotification(selectorUser.name))
    .then(() => {
      dispatch(getAllNotificationPost(selectorUser.name))
      setShowNotification(false);
    })
  }
  return (
    <>
      <Navbar home={false} />
      <main className={style.main}>
        <aside className={style.menu}>
          <h1>Profile</h1>
          <img
            src={isAuthenticated ? user.picture : "https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg"}
            alt=""
            style={{ marginTop: "20px" }}
          />
          <h1 style={{ marginTop: "20px" }}>{isAuthenticated ? user.name : "Guest"}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link className={style.link} to={"../forum"}>
              View posts
            </Link>
            <Link className={style.link} to={"/forum/create"}>
              Create a post
            </Link>
            <Link className={style.link} to={"../messenger"}>
              Messages
            </Link>
            {selector.length > 0 && <p className={style.link} onClick={() => setShowNotification(true)}>
              Notifications <span>{selector.length}</span>
            </p>}
          </div>
        </aside>
        {isCreatingPost ? (
          <>
            <ForumPosts />
            <Suggestions />
          </>
        ) : (
          <ForumCreatePost user={user} />
        )}
      </main>
      {showNotification && <div className={style.containerNotification}>
        <button onClick={handlerBackNotification}>Back</button>
        <NotificationPost data={selector}/>
        </div>}
    </>
  );
}
