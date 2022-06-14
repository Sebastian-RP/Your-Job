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
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./home.module.css";

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
  }, [dispatch]);

  useEffect(() => {
    companies.forEach((comp) => {
      if (comp.email === user.email) {
        setCompany(comp);
        console.log(company);
      }
    });
    if (company) {
      dispatch(getAllPostsFromCompany(company.id));
    }
    // eslint-disable-next-line
  }, [dispatch, user, company]);

  return (
    <>
      <Navbar />
      <div className={style.columnPost}>
        {posts?.map((data, index) => {
          // console.log(data);
          return (
            <div className={style.cardPost} key={index}>
              <Card>
                <Card.Header as="h5">Oferta Laboral</Card.Header>
                <Card.Body>
                  <Card.Title>{data.TitlePost}</Card.Title>
                  <Card.Text style={{ textAlign: "start" }}>
                    {data.descripcion}
                    <br />
                    <strong>Experience:</strong> {data.experience}
                    <br />
                    <strong>Min-Salary:</strong> {data.min_salary}
                    <br />
                    <strong>Max-Salary:</strong> {data.max_salary}
                    <br />
                    <strong>Modality:</strong> {data.modality}
                    <br />
                    <strong>Technologies:</strong>
                    <>
                      {data.technologiesId.map((data, i) => {
                        let tech = allTechnologies.find(
                          // eslint-disable-next-line
                          (t) => t.id == data
                        );

                        return <li key={i}>{tech ? tech.name : data}</li>;
                      })}
                    </>
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
