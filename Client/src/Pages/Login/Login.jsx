// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const { loginWithRedirect, loginWithPopup } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className={style.containerLogin}>
      <Title>Welcome to</Title>
      <Title2>YourJob</Title2>
      <div className={style.login}>
        <div>
          {isAuthenticated ? (
            <>
              <Button
                className={style.continue}
                onClick={() => navigate("/home")}
              >
                Continue
              </Button>
              <Button
                className={style.logout}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                loginWithPopup();
              }}
            >
              Log in
            </Button>
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


const Button = styled.button`
  background-color: #1C5D99;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  padding: 7px 10px 7px 10px ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #639FAB;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title2 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #dddddd;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;