import style from "./TextArea.module.css";

export default function TextArea({ state, setState, changeHandler }) {
  return (
    <div className={style.container}>
      <textarea
        name="content"
        id=""
        placeholder={"Insert the content of your post"}
        value={state.content}
        onChange={(e) => changeHandler(e, state, setState)}
        className={style.textArea}
      ></textarea>
    </div>
  );
}
