import style from "./ForumPosts.module.css";
import Post from "../Post/Post";

export default function ForumPosts() {
  const Posts = ["Jose Peña", "Raul Diaz", "Jeronimo Perez", "Armando Lio", "Rodrigo Marte", "Benjamin Andujar", "Mata lluvia", "Rosa melina"];

  return (
    <section className={style.container}>
      <h2>Posts</h2>
      <hr />
      <ul className={style.posts}>
        {Posts.map((author, index) => {
          return <Post key={author + "_" + index} Author={author} />;
        })}
      </ul>
    </section>
  );
}
