import { Card, Button } from "react-bootstrap";
import style from "./onboarding.module.css";
import { useState } from "react";
import RegisterUser from "../../Components/register/RegisterUser";
import RegisterCompany from "../../Components/register/RegisterCompany";
import { useLocation } from "react-router-dom";
import { FaUsers, FaUserAlt } from "react-icons/fa";

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
        <h1>Hello new User!</h1>
        <Card.Body>
          <h3>Please choose your use preference</h3>
          <p>You can choose between these two options</p>
          <div className={style.buttons}>
            <div>
              <button className={style.Button} onClick={handlerUserTrue}>
                <FaUserAlt />
              </button>
              <p><strong>User</strong></p>
            </div>
            <div>
              <button className={style.Button} onClick={handlerCompanyTrue}>
                <FaUsers />
              </button>
              <p><strong>Company</strong></p>
            </div>
          </div>
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
