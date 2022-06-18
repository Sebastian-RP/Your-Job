import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import swal from "sweetalert";

export default function Navbar() {
  const { logout, isAuthenticate } = useAuth0();
  const navigate = useNavigate();
  const carrito = useSelector((state) => state.carrito);
  const loggedUser = useSelector((state) => state.myUser);

 
  const handlerPerfile = () => {
    if (loggedUser.error) {
      return swal({
        title: "Oops!",
        text: "It seems like you haven't finished your profile, click Ok to finish it!",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate(`/onboarding`);
        } else {
          swal({
            title: "are you sure?",
            icon: "warning",
          });
        }
      });
    }else {
      navigate(`/user/${loggedUser.name}`)
    }
  };

  return (
    <div className={style.containerNavbar}>
      <h1>YourJob</h1>
      <SearchBar />
      <div>
        <Button variant="success" onClick={() => navigate("/carrito")}>
          <FaShoppingCart /> {carrito.length}
        </Button>
        <Button variant="success" onClick={() => navigate("/products")}>
          Premium
        </Button>
        {isAuthenticate && (
          <>
        <Button variant="success" onClick={() => handlerPerfile()}>
          Profile
          </Button>
            <Button
              variant="danger"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              LogOut
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
