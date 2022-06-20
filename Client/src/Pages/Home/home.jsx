import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, getAllPost, getCompanyByEmail, getUserByEmail } from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./HomeUser/HomeUser.jsx";

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
    dispatch(getUserByEmail(user?.email));
    dispatch(getCompanyByEmail(user?.email));
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    if (!loggedCompany.hasOwnProperty("error")) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [loggedUser, loggedCompany]);
  return isUser ? <HomeUser /> : <HomeCompany />;
}
