import style from "./Forum.module.css";
import Post from "../../Components/Post/Post";
import { Link } from "react-router-dom";
import AdPost from "../../Components/AdPost/AdPost";
import { useAuth0 } from "@auth0/auth0-react";
export default function Forum() {
  const Posts = ["Jose Peña", "Raul Diaz", "Jeronimo Perez", "Armando Lio", "Rodrigo Marte", "Benjamin Andujar", "Mata lluvia", "Rosa melina"];
  const Follows = ["Jeronimo Perez", "Armando Lio", "Rodrigo Marte", "Benjamin Andujar"];
  const { isAuthenticated, isLoading, user } = useAuth0();
  return (
    <>
      <header className={style.header}>
        <h1>YourJobs</h1>
      </header>
      <main className={style.main}>
        <aside className={style.menu}>
          <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" width={"100px"} style={{ marginTop: "20px" }} />
          <h3 style={{ marginTop: "20px" }}>José Peña</h3>
          <hr />
          <h4>Profile</h4>
          <hr />
          <div>
            <p>View posts</p>
            <p>Create a post</p>
            <p>Messages</p>
            <p>Notifications</p>
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
                  <img
                    src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg"
                    alt=""
                    width={"50px"}
                    // style={{ marginTop: "20px" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "80%" }}>
                    <Link to="/" style={{ marginLeft: "20px", marginBottom: "0px" }}>
                      {follow}
                    </Link>
                    {/* <button>Visit</button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
        <section className={style.container}>
          <h2>Posts</h2>
          <hr />
          <ul className={style.posts}>
            {Posts.map((author, index) => {
              return <Post key={author + "_" + index} Author={author} />;
            })}
          </ul>
        </section>
        <aside className={style.announces}>
          <h2>Advertisements</h2>
          <ul>
            <hr />
            <AdPost Company={"L&R Commercial"} />
            <AdPost Company={"Optica Oviedo"} />
            <AdPost Company={"Banco Popular"} />
          </ul>
        </aside>
      </main>
    </>
  );
}
