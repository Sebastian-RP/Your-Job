import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUsers } from "../../Redux/Actions/Actions";

export default function Navbar() {
  const { logout, user } = useAuth0();
  const navigate = useNavigate();
  const carrito = useSelector((state) => state.carrito);
  const users = useSelector((state) => state.users);
  const [loggedUser, setLoggedUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers().then((data) => dispatch(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let test = users.find((userdb) => userdb.email === user.email);
    setLoggedUser(test);

    // eslint-disable-next-line
  }, [users]);

  return (
    <div className={style.containerNavbar}>
      <h1>YourJob</h1>
      <SearchBar />
      <div>
        <Button
          variant="success"
          onClick={() => navigate(`/users/${loggedUser.name}`)}
        >
          Profile
        </Button>
        <Button variant="success" onClick={() => navigate("/carrito")}>
          Carrito {carrito.length}
        </Button>
        <Button variant="success" onClick={() => navigate("/products")}>
          Premium
        </Button>
        <Button
          variant="danger"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
}
