import AdPost from "../AdPost/AdPost";
import style from "./Advertisment.module.css";
export default function Advertisement() {
  return (
    <aside className={style.announces}>
      <h2>Advertisements</h2>
      <ul>
        <hr />
        <AdPost Company={"L&R Commercial"} />
        <AdPost Company={"Optica Oviedo"} />
        <AdPost Company={"Banco Popular"} />
      </ul>
    </aside>
  );
}
