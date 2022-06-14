import { Card, Button } from "react-bootstrap";
import style from "./onboarding.module.css";
import { useState } from "react";
import RegisterUser from "../../Components/register/RegisterUser";
import RegisterCompany from "../../Components/register/RegisterCompany";
import { useLocation } from "react-router-dom";

export default function Onboarding() {
  const [user, setUser] = useState(false);
  const [company, setCompany] = useState(false);
  const search = useLocation().search;
  const state = new URLSearchParams(search).get("state");

  const handlerFalse = () => {
    setUser(false);
    setCompany(false);
  };
  const handlerUserTrue = () => {
    setCompany(false);
    setUser(true);
  };
  const handlerCompanyTrue = () => {
    setUser(false);
    setCompany(true);
  };

  return (
    <div className={style.container}>
      <Card className="text-center">
        <Card.Header>Hello new User!</Card.Header>
        <Card.Body>
          <Card.Title>Please choose your use preference</Card.Title>
          <Card.Text>You can choose between these two options</Card.Text>
          <Button variant="primary" onClick={handlerUserTrue}>
            User
          </Button>
          <br />
          <br />
          <Button variant="primary" onClick={handlerCompanyTrue}>
            Company
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      {user !== company && (
        <Button
          className={style.buttonCancel}
          variant="danger"
          onClick={handlerFalse}
        >
          Cancel
        </Button>
      )}
      {user && <RegisterUser props={state}/>}
      {company && <RegisterCompany props={state}/>}
    </div>
  );
}
