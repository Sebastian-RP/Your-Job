import style from "./ForumPosts.module.css";
import Post from "../Post/Post";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ForumPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/forum/posts").then(({ data }) => {
      setPosts(data.sort((a, b) => b.id - a.id));
    });
  }, []);
  return (
    <section className={style.container}>
      <h2>Posts</h2>
      <hr />
      <ul className={style.posts}>
        {posts.map((post, index) => {
          return <Post key={post.user + "_" + index} data={post} />;
        })}
      </ul>
    </section>
  );
}
