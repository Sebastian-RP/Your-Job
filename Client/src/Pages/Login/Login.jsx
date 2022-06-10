// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import image from '../../image/img.png';

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  return (
    <div className={style.containerLogin}>
      <h1>YourJob</h1>
      <div className={style.login}>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div>
          {isAuthenticated ? (
            <button
              className={style.logout}
              onClick={() =>
                logout({
                  federated: true,
                })
              }
            >
              log out
            </button>
          ) : (
            <button
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Log in
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
        
      </div>
      </div>
  );
}
