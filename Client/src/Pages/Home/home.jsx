import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../../Redux/Actions/Actions";
import HomeCompany from "./Home_company";
import HomeUser from "./Home_user";

export default function Home() {
  const { user, isLoading } = useAuth0();
  const [isUser, setIsUser] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      companies.forEach((comp) => {
        // eslint-disable-next-line
        if (comp.email == user.email) {
          setIsUser(false);
        }
      });
    }
    // eslint-disable-next-line
  }, [isLoading]);

  if (isLoading) {
    return <div>LOADING...</div>;
  } else if (isUser) {
    return <HomeUser />;
  } else {
    return <HomeCompany />;
  }
}
