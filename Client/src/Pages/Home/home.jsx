import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCompanies,
  getAllPost,
  getAllProducts,
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
  const logged = useSelector((state) => state.myUser);
  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    logged?.phone ? setIsUser(false) : setIsUser(true);
  }, [logged]);
  return isUser ? <HomeUser /> : <HomeCompany />;
}
