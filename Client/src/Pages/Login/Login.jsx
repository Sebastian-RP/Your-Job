// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  return (
    <form className={style.container}>
      <div className={style.login}>
        <div>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({
                  federated: true,
                })
              }
            >
              logout
            </button>
          ) : (
            <button
              onClick={() => {
                loginWithRedirect();
              }}
            >
              auth
            </button>
          )}

          <div>
            {isLoading
              ? "Loading..."
              : isAuthenticated && (
                  <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p> {user.email} </p>
                  </div>
                )}
          </div>
        </div>
        {/* <div className={style.logintext}>Login to your Account</div>
        <br />
        <div className={style.input_container}>
          <input type="text" placeholder="E-mail" className={style.input} />
          <br />
          <input type="text" placeholder="Password" className={style.input} />
        </div>
        <button>Login</button>

        <div>
          Don't have an account? <Link to="/register  ">Register</Link>{" "}
        </div> */}
      </div>
    </form>
  );
}
