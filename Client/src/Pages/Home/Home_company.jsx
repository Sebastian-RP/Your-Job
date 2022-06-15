import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar/NavBar";
import {
  getAllCompanies,
  getAllPost,
  getAllPostsFromCompany,
} from "../../Redux/Actions/Actions";
import {Button, Card} from "react-bootstrap";
import style from "./homeCompany.module.css";

export default function HomeCompany() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const allTechnologies = [...selector.technologies];

  const posts = [...selector.companyPosts];
  const [company, setCompany] = useState(null);

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    companies.forEach((comp) => {
      if (comp.email === user.email) {
        setCompany(comp);
      }
    });
    // eslint-disable-next-line
  }, []);
  

  useEffect(() => {
    if (company) {
      dispatch(getAllPostsFromCompany(company.id));
    }
    // eslint-disable-next-line
  }, [company]);
  console.log(user)
  return (
    <div className={style.containerCompany}>
      <Navbar />
      <div className={style.containerInfo}>
        <div className={style.infoCompany}>
          <h2>Company</h2>
          <div className={style.imageCompany}>
            <img src={company?.image} alt="image company" />
          </div>
          <div className={style.infoCompany}>
            <p><strong>Name:</strong> {company?.name}</p>
            <p><strong>Email:</strong> {company?.email}</p>
            <p><strong>Address:</strong> {company?.address}</p>
          </div>
          <Button variant='success'>Create Post</Button>
        </div>
        <div className={style.infoPost}>

        {posts?.map((data, index) => {
          return (
            <div className={style.cardPost} key={index}>
              <Card>
                <Card.Header as="h6">{data.titlePost}</Card.Header>
                <Card.Body>
                  {/* <Card.Title>{data.TitlePost}</Card.Title> */}
                  <Card.Text style={{ textAlign: "start" }}>
                    <div className={style.info}>
                      <span>
                    <strong>Experience:</strong> {data.experience}
                      </span>
                    <br />
                    <span>
                    <strong>Modality:</strong> {data.modality}
                    </span>
                    <br />
                    <>
                    <strong>Technologies:</strong>
                    <div className={style.ul}>
                      {data.technologiesId.map((data, i) => {
                        let tech = allTechnologies.find(
                          // eslint-disable-next-line
                          (t) => t.id == data
                        );

                        return <li key={i}>{tech ? tech.name : data}</li>;
                      })}
                    </div>
                    </>
                    </div>
                    
                    {/* <br />
                    <strong>Postulates:</strong>
                    <>
                      {data.postulates?.map((data, i) => {
                        return <li key={i}> {data.name} </li>;
                      })}
                    </> */}
                  </Card.Text>
                  <p>Created: {data.createdAt.slice(0,10)}</p>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
