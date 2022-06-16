import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies, getAllPost, getAllProducts } from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./Home_user";
import image from './loadingJob.gif';

export default function Home() {
  const { user, isLoading } = useAuth0();
  const [isUser, setIsUser] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    companies.forEach((comp) => {
      // eslint-disable-next-line
      if (comp.email == user.email) {
        setIsUser(false);
        getAllProducts("empresa").then((action) => {
          dispatch(action);
        });
      } else{
        getAllProducts("usuario").then((action) => {
          dispatch(action);
        });
      }
    });
    // eslint-disable-next-line
  }, [isLoading]);

  if (isLoading) {
    return <img src={image} alt='loading page'/>;
  } else if (isUser) {
    return <HomeUser />;
  } else {
    return <HomeCompany />;
  }
}
