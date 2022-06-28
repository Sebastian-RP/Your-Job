import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCompanies,
  getAllPost,
  getCompanyByEmail,
  getUserByEmail,
  logOut,
} from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./Home_user.jsx";
import HomeAdmin from "./Home_admin";
import Loading from "../../Components/Loading/Loading";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, isLoading, logout } = useAuth0();
  const [isUser, setIsUser] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
  const exit = () => {
    dispatch(logOut());
    logout({ returnTo: window.location.origin });
  };
  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
  }, [dispatch]);
  useEffect(() => {
    if (Array.isArray(loggedUser)) dispatch(getUserByEmail(user?.email));
    if (Array.isArray(loggedCompany)) dispatch(getCompanyByEmail(user?.email));
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    if (!isLoading) {
      if (!loggedCompany.hasOwnProperty("error")) {
        if (loggedCompany.hasOwnProperty("warning")) {
          return swal({
            title: "Account Banned",
            text: `This account has been banned, please log in with another account.`,
            icon: "warning",
          }).then((data) => {
            exit();
          });
        } else {
          setIsUser(false);
        }
      } else {
        if (!loggedUser.hasOwnProperty("error")) {
          if (loggedUser.hasOwnProperty("warning")) {
            return swal({
              title: "Account Banned",
              text: `This account has been banned, please log in with another account.`,
              icon: "warning",
            }).then((data) => {
              exit();
            });
          } else {
            setIsUser(true);
          }
        } else {
          setIsUser("nada");
        }
      }
    }
  }, [loggedUser, loggedCompany, isLoading]);
  return isLoading ? (
    <Loading />
  ) : isUser &&
    (loggedUser?.Account === "Admin" ||
      loggedUser?.Account === "SuperAdmin") ? (
    <HomeAdmin />
  ) : (loggedUser.error && loggedCompany.error) || !loggedUser.error ? (
    <HomeUser />
  ) : (
    <HomeCompany />
  );
}
