// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import logo from "./YourJobs.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyByEmail,
  getUserByEmail,
  logOut,
} from "../../Redux/Actions/Actions";
import { useEffect } from "react";
export default function Login() {
  const { loginWithPopup, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);

  useEffect(() => {
    if (isAuthenticated) {
      validate();
    }
  }, [loggedUser]);

  useEffect(() => {
    dispatch(getCompanyByEmail(user?.email));
    dispatch(getUserByEmail(user?.email));
  }, [user, isAuthenticated]);

  const validate = () => {
    if (
      loggedUser.hasOwnProperty("error") &&
      loggedCompany.hasOwnProperty("error")
    ) {
      navigate("/onboarding");
    } else {
      navigate("/home");
    }
  };

  const exit = () => {
    dispatch(logOut());
    console.log("logout");
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={style.container}>
      <aside className={style.aside}>
        <h1>Welcome to YourJob</h1>
        <img src={logo} alt="" width={"300px"} />
      </aside>
      <main className={style.main}>
        <h1>Join Yourjob</h1>
        <div className={style.profile}>
          {isLoading ? (
            <img
              src="https://ucarecdn.com/eeaa3fc1-0bea-4ed1-97e5-f78b1f2aac76/"
              width={"100px"}
            />
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className={style.profile__image}
                  />
                  <h2 className={style.profile__name}>{user.name}</h2>
                  {/* <button
                    className={`${style.button} ${style.continue}`}
                    onClick={() => validate()}
                  >
                    Continue
                  </button> */}
                  <button
                    className={`${style.button} ${style.logout}`}
                    onClick={() => exit()}
                  >
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
