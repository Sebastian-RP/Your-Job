import style from "./ForumCreatePost.module.css";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";
import axios from "axios";

async function submitHandler(e, state) {
  e.preventDefault();
  try {
    console.log(await axios.post("http://localhost:3001/forum/post", { ...state }).data);
  } catch (e) {
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
  const [state, setState] = useState({ title: "", content: "", user: "Jose" });

  return (
    <section className={style.container}>
      <h1>Create post</h1>
      <form onSubmit={(e) => submitHandler(e, state)}>
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
