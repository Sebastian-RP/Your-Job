// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import logo from "./YourJobs.png";
export default function Login() {
  const { loginWithRedirect, loginWithPopup, user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();
  console.log(isLoading);
  return (
    <div className={style.container}>
      <aside className={style.aside}>
        <h1>Welcome to YourJob</h1>
        <img src={logo} alt="" width={"300px"} />
      </aside>
      <main className={style.main}>
        <h1>Join to Yourjob</h1>
        <div className={style.profile}>
          {isLoading ? (
            <img src="https://ucarecdn.com/eeaa3fc1-0bea-4ed1-97e5-f78b1f2aac76/" width={"100px"} />
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <img src={user.picture} alt={user.name} className={style.profile__image} />
                  <h2 className={style.profile__name}>{user.name}</h2>
                  <button className={`${style.button} ${style.continue}`} onClick={() => navigate("/home")}>
                    Continue
                  </button>
                  <button className={`${style.button} ${style.logout}`} onClick={() => logout({ returnTo: window.location.origin })}>
                    Log out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    loginWithPopup();
                  }}
                  className={`${style.button} ${style.login}`}
                >
                  Login
                </button>
              )}
            </>
          )}
        </div>
        {/* <div className={style.profile}>
          {isLoading
            ? "Loading..."
            : isAuthenticated && (
                <div>
                  <p> {user.email} </p>
                </div>
              )}
        </div> */}
      </main>
    </div>
  );
}
