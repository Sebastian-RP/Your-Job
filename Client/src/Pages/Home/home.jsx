import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import {
  getAllCompanies,
  getAllPost,
  getAllTechnologies,
} from "../../Redux/Actions/Actions";
import { useEffect, useState } from "react";

const Modality = ["remoto", "presencial"];
const Experience = ["trainig", "junior", "semi-senior", "senior"];

export default function Home() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [posts, setPosts] = useState(null);
  const [num, setNum] = useState(null);
  const allTechnologies = [...selector.technologies];
  const companies = [...selector.companies];
  const suggestions = companies.slice(Math.floor(num), Math.floor(num) + 2);
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
    dispatch(getAllTechnologies());
  }, [dispatch]);

  useEffect(() => {
    setPosts(selector.posts);
    setNum(Math.random() * (companies.length - 3));
  }, [selector]);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  const getFilterByTechnologies = (id) => {
    setPosts(
      selector.posts.filter((data) =>
        data.technologiesId.includes(id.toString()),
      ),
    );
  };
  const filterByCompany = (name) => {
    setPosts(selector.posts.filter((data) => data.company.name === name));
  };
  const filterByModality = (data) => {
    setPosts(selector.posts.filter((d) => d.modality === data));
  };
  const filterByExperience = (data) => {
    setPosts(selector.posts.filter((d) => d.experience === data));
  };

  return (
    <div className={style.containerHome}>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className={style.containerActions}>
            <div className={style.filters}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Technologies</Accordion.Header>
                  {allTechnologies?.map((d, i) => {
                    return (
                      <Accordion.Body
                        style={{ padding: "5px", cursor: "pointer" }}
                        key={i}
                        onClick={() => getFilterByTechnologies(d.id)}
                      >
                        {d.name}
                      </Accordion.Body>
                    );
                  })}
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Date filter</Accordion.Header>
                  <Accordion.Body>hola</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Company</Accordion.Header>
                  <div
                    style={{
                      maxHeight: "300px",
                      overflowY: "scroll",
                      cursor: "pointer",
                    }}
                  >
                    {companies.map((d, i) => {
                      return (
                        <Accordion.Body
                          style={{ padding: "2px" }}
                          key={i}
                          onClick={() => filterByCompany(d.name)}
                        >
                          {d.name}
                          <hr />
                        </Accordion.Body>
                      );
                    })}
                  </div>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Work contract</Accordion.Header>
                  {Modality.map((data, index) => {
                    return (
                      <Accordion.Body
                        key={index}
                        onClick={() => filterByModality(data)}
                        style={{ cursor: "pointer" }}
                      >
                        {data}
                        <hr />
                      </Accordion.Body>
                    );
                  })}
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Experience</Accordion.Header>
                  {Experience.map((data, index) => {
                    return (
                      <Accordion.Body
                        key={index}
                        onClick={() => filterByExperience(data)}
                        style={{ cursor: "pointer" }}
                      >
                        {data}
                        <hr />
                      </Accordion.Body>
                    );
                  })}
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={style.infoPost}>
              <div className={style.image}>
                <img src={user.picture} alt="profile_picture" />

                <h3>{user.name}</h3>
                {posts !== selector.posts && (
                  <Button variant='success' onClick={() => setPosts(selector.posts)}>
                    Clear Filter
                  </Button>
                )}
              </div>
              <div className={style.columnInfoRight}>
                <h3>suggestions</h3>
                <>
                  {suggestions.map((data, index) => (
                    <Card
                      bg="secondary"
                      key={index}
                      text="light"
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Header>
                        <strong>Email:</strong> {data.email}
                        <br />
                        <strong>Phone:</strong> {data.phone}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title> {data.name} </Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </>
                <div className={style.columInfo}></div>
              </div>
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
                                  (t) => t.id == data,
                                );

                                return <li key={i}>{tech.name}</li>;
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
            </div>
          </div>
        </>
      ) : (
        logout({ returnTo: window.location.origin })
      )}
    </div>
  );
}
