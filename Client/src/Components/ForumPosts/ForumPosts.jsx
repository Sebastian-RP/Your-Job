import style from "./ForumPosts.module.css";
import Post from "../Post/Post";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllForumPost } from "../../Redux/Actions/Actions";


export default function ForumPosts() {
 const selector = useSelector(state => state.allForumPost);
 const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(getAllForumPost());
    
  }, []);
  return (
    <section className={style.container}>
      <h1>Posts</h1>
      <hr className={style.divition} />
      <ul className={style.posts}>
        {selector?.map((post, index) => {
          return <Post key={post.user + "_" + index} data={post} />;
        })}
      </ul>
    </section>
  );
}
