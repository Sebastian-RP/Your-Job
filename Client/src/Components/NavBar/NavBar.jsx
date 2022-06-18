import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser, AiOutlinePoweroff, AiOutlineStar } from "react-icons/ai";
import swal from "sweetalert";
import styled from "styled-components";

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
      <Title2>YourJob</Title2>
      <SearchBar />
      <div>
      
        <Button onClick={() => navigate("/carrito")}>
          <FaShoppingCart/> {carrito.length}
        </Button>
        <Button onClick={() => navigate("/products")}>
          <AiOutlineStar/> | Premium
        </Button>
        {isAuthenticate && (
          <>
            <Button onClick={() => navigate(`/users/${loggedUser.name}`)}>
              <AiOutlineUser/>
            </Button>
            <ButtonOff onClick={() => logout({ returnTo: window.location.origin })}>
              <AiOutlinePoweroff/>
            </ButtonOff>
          </>
        )}
      </div>
    </div>
  );
}


const Button = styled.button`
  background-color: #1C5D99;
  border-radius: 5px;
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

const ButtonOff = styled(Button)`
  background-color: #639FAB;

  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }

  `;

const Title2 = styled.h1`
font-size: 2.5rem;
font-weight: bold;
color: #dddddd;
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
`;