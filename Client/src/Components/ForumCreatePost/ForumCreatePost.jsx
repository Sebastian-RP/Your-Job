import style from "./ForumCreatePost.module.css";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
async function submitHandler(e, state, setState) {
  e.preventDefault();
  try {
    const response = await axios.post("/forum/post", { ...state });
    if (response.status === 200) {
      setState({ title: "", content: "", user: state.user });
      swal({ title: "Create Post", text: "Your post has been posted", icon: "success" });
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
  const [state, setState] = useState({ title: "", content: "", user: isAuthenticated ? user.name : "Guest" });
  if (!user?.name && isAuthenticated) setState({ ...state, user: user.name });
  return (
    <section className={style.container}>
      <h1>Create post</h1>
      <form onSubmit={(e) => submitHandler(e, state, setState)}>
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
          />
        </div>
        <div className={style.input__container}>
          <label htmlFor="" className={style.label}>
            Body
          </label>
          <TextArea state={state} setState={setState} changeHandler={changeHandler} />
        </div>
        <div className={style.options__container}>
          <input type="submit" value="Create Post" className={style.button} />
          <input type="button" value="Preview Post" className={style.button} />
        </div>
      </form>
    </section>
  );
}
