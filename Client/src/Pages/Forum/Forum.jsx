import style from "./Forum.module.css";
import { Link, useLocation } from "react-router-dom";
import Suggestions from "../../Components/Suggestions/Suggestions";
import ForumPosts from "../../Components/ForumPosts/ForumPosts";
import ForumCreatePost from "../../Components/ForumCreatePost/ForumCreatePost";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
export default function Forum() {
  const isCreatingPost = !useLocation().pathname.split("/").includes("create");
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <Navbar home={false} />
      <main className={style.main}>
        <aside className={style.menu}>
          <img
            src={isAuthenticated ? user.picture : "https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg"}
            alt=""
            width={"100px"}
            style={{ marginTop: "20px" }}
          />
          <h3 style={{ marginTop: "20px" }}>{isAuthenticated ? user.name : "Guest"}</h3>
          <hr />
          <h4>Profile</h4>
          <hr />
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
    </>
  );
}
