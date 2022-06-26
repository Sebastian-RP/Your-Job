import Styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={Styles.loader}>
      <div className={Styles.ball}></div>
      <div className={Styles.ball}></div>
      <div className={Styles.ball}></div>
      <span>Loading...</span>
    </div>
  );
}
