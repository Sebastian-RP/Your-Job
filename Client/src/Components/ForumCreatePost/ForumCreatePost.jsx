import style from "./ForumCreatePost.module.css";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import Post from "../Post/Post.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
async function submitHandler(e, state, setState, navigate) {
  e.preventDefault();
  try {
    if (state.content.length <= 0) {
      setState({ ...state, error: { ...state.error, content: "* Is required fill the content of the post *" } });
    } else {
      const response = await axios.post("/forum/post", { ...state });
      if (response.status === 200) {
        setState({ title: "", content: "", user: state.user });
        swal({ title: "Create Post", text: "Your post has been posted", icon: "success" }).then((result) => {
          if (result) {
            navigate("/forum");
          }
        });
      }
    }
  } catch (e) {
    swal({ title: "Create Post", text: "An error has ocurred", icon: "error" });
    console.error(e.message);
  }
}
function changeHandler(e, state, setState) {
  let inputName = e.target.name;
  let inputValue = e.target.value;
  state[inputName] = inputValue;
  setState({ ...state });
}

export default function ForumCreatePost() {
  const { isAuthenticated, user } = useAuth0();
  const selector = useSelector(state => state.myUser);
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: "",
    content: "",
    user: isAuthenticated ? selector.name : "Guest",
    picture: isAuthenticated ? selector.image : "https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg",
    error: {},
  });
  const [preview, setPreview] = useState(false);
  if (!user?.name && isAuthenticated) setState({ ...state, user: user.name });
  return (
    <section className={style.container}>
      <h1>{!preview ? "Create post" : "Preview Post"}</h1>
      <form onSubmit={(e) => submitHandler(e, state, setState, navigate)} className={!preview ? "" : style.form}>
        {!preview ? (
          <>
            <div className={style.input__container}>
              <label htmlFor="" className={style.label}>
                Title
              </label>
              <input
                className={style.input}
                placeholder={"Insert a title for your post"}
                type="text"
                value={state.title}
                onChange={(e) => changeHandler(e, state, setState)}
                name="title"
                id=""
                required
              />
            </div>
            <div className={style.input__container}>
              <label htmlFor="" className={style.label}>
                Body
              </label>
              <span className={style.error}>{state.error?.content ? state.error.content : ""}</span>
              <TextArea state={state} setState={setState} changeHandler={changeHandler} />
            </div>
          </>
        ) : (
          <Post data={{ ...state, preview }} />
        )}
        <div className={style.options__container}>
          <input type="submit" value="Create Post" className={style.button} />
          <input
            type="button"
            value={preview ? "Edit Post" : "Preview Post"}
            onClick={() => {
              setPreview(!preview);
            }}
            className={style.button}
          />
        </div>
      </form>
    </section>
  );
}
