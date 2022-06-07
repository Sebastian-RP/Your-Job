import { Link } from "react-router-dom";
import style from "./Login.module.css";

export default function Login() {
  return (
    <form className={style.container}>
      <div className={style.login}>
        <div className={style.logintext}>Login to your Account</div>
        <br />
        <div className={style.input_container}>
          <input type="text" placeholder="E-mail" className={style.input} />
          <br />
          <input type="text" placeholder="Password" className={style.input} />
        </div>
        <button>Login</button>

        <div>
          Don't have an account? <Link to="/register  ">Register</Link>{" "}
        </div>
      </div>
    </form>
  );
}
