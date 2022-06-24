import React, { useEffect } from "react";
import style from "../Users/perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getActivePlans,
  updatePremiumPlan,
  getAllEmployeesCompany,
} from "../../Redux/Actions/Actions";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getCompanyInfo,
  updatePremiumPlanCompany,
} from "../../Redux/Actions/Actions";
import { Card } from "react-bootstrap";

export default function Companies() {
  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companyname } = useParams();
  const loggedCompany = useSelector((state) => state.myCompany);
  const [ownProfile, setOwnProfile] = useState(false);
  const companyData = useSelector((state) => {
    // console.log(state);
    return {
      ...state.company,
      postulates: [...state.postulatesUser],
      plans: [...state.activePlans],
      employees: [...state.employees],
    };
  });

  console.log(companyData);
  useEffect(() => {
    dispatch(getCompanyInfo(companyname));
    if (loggedCompany.name === companyname) {
      setOwnProfile(true);
    }
    dispatch(getActivePlans(user));
    updatePremiumPlanCompany(loggedCompany?.email, companyData.plans).then(
      (res) => {
        dispatch(res);
      }
    );
    getAllEmployeesCompany(companyData?.id).then((res) => {
      dispatch(res);
    });
    //eslint-disable-next-line
  }, []);

  //----------------------------------
  const sendMessage = async () => {
    try {
      const res = await axios.get(`/users/` + companyname);
      let conversation = {
        senderId: loggedCompany.id,
        receiverId: res.data.id,
      };
      await axios.post("/conversation/", conversation);
      navigate("/messenger");
    } catch (error) {
      console.log(error);
    }
  };

  //----------------------------------
  //Ideas: Colocar una seccion donde puedan ver las interacciones de usuarios mas recientes
  //Ideas: Panel de control de posts. Donde se puedan eliminar los posts que no quieran mostrar
  return (
    <>
      <Navbar />
      <div className={style.containerPerfil}>
        <div className={style.header}>
          <h2>About the company</h2>
          <hr />
          <div className={style.picture}>
            <img
              src={
                companyData.image
                  ? companyData.image
                  : "https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg"
              }
              alt="perfil"
            />
            <h2>{companyData?.name}</h2>
          </div>
          <div className={style.about}>
            <p>Email: {companyData?.email}</p>
            <p>Nationality: {companyData?.nationality}</p>
            <p>Address: {companyData?.address}</p>
            <p>Phone: {companyData?.phone} </p>
            <p>
              Linkedin:{" "}
              <a
                href={"https://" + companyData.url}
                target="_blank"
                rel="noopener , noreferrer"
              >
                {companyData.url}
              </a>
            </p>
          </div>
        </div>
        <div className={style.suggestions}>
          <div>
            <button
              className={style.Button}
              onClick={() => {
                navigate("/home");
              }}
            >
              Go to home
            </button>
            <button
              className={style.Button}
              onClick={() => sendMessage()}
              style={{ display: ownProfile ? "none" : "" }}
            >
              Message
            </button>
            <button
              className={style.Button}
              style={{ display: ownProfile ? "" : "none" }}
              onClick={() => navigate(`/users/${loggedCompany.name}/edit`)}
            >
              Edit Profile
            </button>
          </div>
          {companyData.plans[0] !== "You don't have any plan" &&
          companyData.plans[0] !== "To see your plans, please log in" ? (
            <>
              <h2>My posts</h2>
              <hr />
              <button className={style.Button}>Create a Post</button>
            </>
          ) : null}
          <div>
            <h2>Employees</h2>
            <hr />
            {companyData.employees ? (
              companyData.employees.length > 0 ? (
                companyData.employees.map((employee, index) => {
                  return (
                    <Card key={index}>
                      <Card.Header
                        as="h2"
                        className={style.employeeName}
                        onClick={() => {
                          navigate(`/users/${employee.name}`);
                        }}
                      >
                        {employee.name}
                      </Card.Header>
                      <Card.Body>
                        <img src={employee.image} alt="perfil" />
                        <p>{employee.nationality}</p>
                        <p>{employee.description}</p>
                      </Card.Body>
                    </Card>
                  );
                })
              ) : (
                <p>No employees</p>
              )
            ) : null}
          </div>
        </div>
        <div className={style.perfilInfo}>
          <div className={style.info}>
            <h2>Information</h2>
            <p>{companyData?.description}</p>
            <hr />
            {companyData.plans ? <h3>Your active plans </h3> : null}
            {companyData.plans?.map((d, i) => {
              return <p key={i}>{d}</p>;
            })}
            <button
              className={style.Button}
              disabled={
                companyData.plans[0] === "You don't have any plan" ||
                companyData.plans[0] === "To see your plans, please log in"
                  ? true
                  : false
              }
            >
              Decline subscription
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
