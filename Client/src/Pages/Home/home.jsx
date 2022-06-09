import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { getAllPost } from "../../Redux/Actions/Actions";

const tecnologias = [
  "Javascript",
  "React",
  "Redux",
  "HTML5",
  "CSS3",
  "Boostrap",
  "Jquery",
  "Java",
];

export default function Home() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  if (isLoading) {
    dispatch(getAllPost());
    return <div>LOADING...</div>;
  }
  console.log(selector);

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
                      <Accordion.Body style={{ padding: "5px" }}>
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
                  <Accordion.Body>hola</Accordion.Body>
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
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img src={user.picture} alt="picture" />

                <h3>{user.name}</h3>
              </div>
              <div>
                {selector.posts.length?selector.posts.map((data, index) => {
                  return (
                    <div>
                    <Card>
                      <Card.Header as="h5">Featured</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </div>
                  );
                }):<h2>not posts found</h2>}
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
