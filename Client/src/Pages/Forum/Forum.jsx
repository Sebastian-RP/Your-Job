import style from "./Forum.module.css";
import { Link, useLocation } from "react-router-dom";
import Advertisement from "../../Components/Advertisment/Advertisment";
import ForumPosts from "../../Components/ForumPosts/ForumPosts";
import ForumCreatePost from "../../Components/ForumCreatePost/ForumCreatePost";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
export default function Forum() {
  const Follows = ["Jeronimo Perez", "Armando Lio", "Rodrigo Marte", "Benjamin Andujar"];
  const isCreatingPost = !useLocation().pathname.split("/").includes("create");
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      {/* <header className={style.header}>
        <h1>YourJobs</h1>
      </header> */}
      <Navbar />
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
            <Link to={"../forum"}>View posts</Link>
            <Link to={"/forum/create"}>Create a post</Link>
            <Link to={"../messenger"}>Messages</Link>
            <Link to={"/forum/create"}>Notifications</Link>
          </div>
          <hr />
          <h4>Follows</h4>
          <hr />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {Follows.map((follow, index) => {
              return (
                <div
                  key={`${follow}_${index}`}
                  style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%", marginTop: "20px" }}
                >
                  <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" width={"50px"} />
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "80%" }}>
                    <Link to="/" style={{ marginLeft: "20px", marginBottom: "0px" }}>
                      {follow}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
        {isCreatingPost ? (
          <>
            <ForumPosts />
            <Advertisement />
          </>
        ) : (
          <ForumCreatePost user={user} />
        )}
      </main>
    </>
  );
}
