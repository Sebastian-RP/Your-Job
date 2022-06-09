import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";

export default function Home() {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Technologies</Accordion.Header>
                  <Accordion.Body>
                   hola
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Date filter</Accordion.Header>
                  <Accordion.Body>
                    hola
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body>
                    hola
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Work contract</Accordion.Header>
                  <Accordion.Body>
                    hola
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Ubication</Accordion.Header>
                  <Accordion.Body>
                    hola
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={style.infoPost}>
                <div style={{display:'flex', alignItems: 'flex-end'}}>
              <img src={user.picture} alt="picture" />
              
              <h3>{user.name}</h3>

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
