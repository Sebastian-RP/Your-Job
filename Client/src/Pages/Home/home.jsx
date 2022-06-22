import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, getAllPost, getCompanyByEmail, getUserByEmail } from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./Home_user.jsx";
import HomeAdmin from "./Home_admin";
import Onboarding from "../Onboarding/Onboarding";

export default function Home() {
  const { user, isLoading } = useAuth0();
  const [isUser, setIsUser] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
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
        setIsUser(false);
      } else {
        if (!loggedUser.hasOwnProperty("error")) {
          setIsUser(true);
        } else {
          setIsUser("nada");
          console.log(isUser);
        }
      }
    }
  }, [loggedUser, loggedCompany, isLoading]);
  return isUser && loggedUser?.Account === "Admin" ? (
    <HomeAdmin />
  ) : isUser === true ? (
    <HomeUser />
  ) : isUser !== "nada" ? (
    <HomeCompany />
  ) : (
    <Onboarding />
  );
}
