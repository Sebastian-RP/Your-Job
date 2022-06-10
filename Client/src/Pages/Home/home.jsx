import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import { getAllCompanies, getAllPost } from "../../Redux/Actions/Actions";
import { useEffect } from "react";

const tecnologias = ["Javascript", "React", "Redux", "HTML5", "CSS3", "Boostrap", "Jquery", "Java"];

export default function Home() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const suggestions = companies.slice(0, 2);
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
  }, [dispatch]);
  if (isLoading) {
    return <div>LOADING...</div>;
  }
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
                  {tecnologias.map((d, i) => {
                    return (
                      <Accordion.Body style={{ padding: "5px" }} key={i}>
                        {d}
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
                  <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
                    {companies.map((d, i) => {
                      return (
                        <Accordion.Body style={{ padding: "2px" }} key={i}>
                          {d.name}
                        </Accordion.Body>
                      );
                    })}
                  </div>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Work contract</Accordion.Header>
                  <Accordion.Body>hola</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Ubication</Accordion.Header>
                  <Accordion.Body>hola</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={style.infoPost}>
              <div style={{ display: "flex", alignItems: "flex-end" }} className={style.image}>
                <img src={user.picture} alt="picture" />

                <h3>{user.name}</h3>
              </div>
              <div className={style.columnInfoRight}>
                <h3>suggestions</h3>
                <>
                  {suggestions.map((data, index) => (
                    <Card bg="secondary" key={index} text="light" style={{ width: "18rem" }} className="mb-2">
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
                {selector.posts?.map((data, index) => {
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
                                return <li key={i}>{data}</li>;
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
