import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCompanies,
  getAllPost,
  getAllProducts,
  getCompanyByEmail,
  getUserByEmail,
} from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./Home_user";
import image from "./loadingJob.gif";

export default function Home() {
  const { user, isLoading } = useAuth0();
  const [isUser, setIsUser] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
  console.log(loggedCompany)
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
    if (loggedCompany.length > 0) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
    console.log(isUser);
  }, [loggedUser, loggedCompany]);
  return isUser ? <HomeUser /> : <HomeCompany />;
}
