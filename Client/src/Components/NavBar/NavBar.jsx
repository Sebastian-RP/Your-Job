import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {
  AiOutlineUser,
  AiOutlinePoweroff,
  AiOutlineStar,
} from "react-icons/ai";
import swal from "sweetalert";
import styled from "styled-components";
import { logOut } from "../../Redux/Actions/Actions";

export default function Navbar() {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const carrito = useSelector((state) => state.carrito);
  const loggedUser = useSelector((state) => state.myUser);
  const dispatch = useDispatch();

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
    } else {
      navigate(`/user/${loggedUser.name}`);
    }
  };

  const exit = () => {
    dispatch(logOut());
    console.log("logout");
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={style.containerNavbar}>
      <Title2 onClick={() => navigate("/home")}>YourJob</Title2>
      <SearchBar />
      <div>
        <Button onClick={() => navigate("/carrito")}>
          <FaShoppingCart /> {carrito.length}
        </Button>
        <Button onClick={() => navigate("/products")}>
          <AiOutlineStar /> | Premium
        </Button>
        { !loggedUser.hasOwnProperty("error") ? (
          <>
            <Button onClick={() => navigate(`/users/${loggedUser.name}`)}>
              <AiOutlineUser />
            </Button>
            <ButtonOff onClick={() => exit()}>
              <AiOutlinePoweroff />
            </ButtonOff>
          </>
        ): null}
      </div>
    </div>
  );
}

const Button = styled.button`
  background-color: #1c5d99;
  border-radius: 5px;
  color: white;
  padding: 7px 10px 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
`;

const ButtonOff = styled(Button)`
  color: #ffffff;
  background-color: #222222;

  &:hover {
    /* border: 1px solid #ffffff; */
    color: #222222;
    background-color: #ffffff;
  }
`;

const Title2 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
