import React, { useEffect } from "react";
import style from "../Users/perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getActivePlans,
  updatePremiumPlan,
  getAllEmployeesCompany,
  getAllPostsFromCompany,
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
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
  const allTechnologies = useSelector((state) => state.technologies);
  const [ownProfile, setOwnProfile] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const posts = useSelector((state) => state.companyPosts);

  const companyData = useSelector((state) => {
    // console.log(state);
    return {
      ...state.company,
      postulates: [...state.postulatesUser],
      plans: [...state.activePlans],
      employees: [...state.employees],
    };
  });

  useEffect(() => {
    dispatch(getCompanyInfo(companyname)).then((data) => {
      getAllEmployeesCompany(data.payload.id).then((res) => {
        dispatch(res);
      });
      dispatch(getAllPostsFromCompany(data.payload.id));
      // console.log(data);
    });
    if (loggedCompany.name === companyname) {
      setOwnProfile(true);
    }
    if (ownProfile) {
      dispatch(getActivePlans(user));
      updatePremiumPlanCompany(loggedCompany?.email, companyData.plans).then(
        (res) => {
          dispatch(res);
        }
      );
    }

    //eslint-disable-next-line
  }, [companyname]);

  //----------------------------------
  const sendMessage = async () => {
    try {
      const res = await axios.get(
        `/company/profile?companyname=` + companyname
      );
      if (loggedUser.id) {
        let conversationUser = {
          senderId: loggedUser.id,
          receiverId: res.data?.id,
        };
        await axios.post("/conversation/", conversationUser);
        navigate("/messenger");
      } else {
        let conversationCompany = {
          senderId: loggedCompany.id,
          receiverId: res.data.id,
        };
        await axios.post("/conversation/", conversationCompany);
        navigate("/messenger");
      }
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
          <div className={style.picture}>
            <img
              src={
                companyData.image
                  ? companyData.image
                  : "https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg"
              }
              alt="perfil"
            />
            <h3>{companyData?.name}</h3>
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
            <button
              className={style.Button}
              onClick={() => {
                setShowPosts(!showPosts);
              }}
            >
              {showPosts ? "Company Employees" : "Company Posts"}
            </button>
          </div>

          <div
            style={{ display: showPosts ? "" : "none" }}
            className={style.suggestionsBody}
          >
            <h2>Company posts</h2>
            {posts &&
              posts.map((data, index) => {
                // console.log(data);
                return (
                  <Card key={index} className={style.cards}>
                    <Card.Header as="h3">{data.titlePost}</Card.Header>
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
                            return <li key={i}>{tech?.name}</li>;
                          })}
                        </>
                      </Card.Text>
                      {/* <button
                      className={style.Button}
                      variant={
                        postId.includes(data.id) ? "secondary" : "primary"
                      }
                      onClick={() => {
                        handlerPostulate({
                          name: logged.name,
                          url: logged.email,
                          postId: data.id,
                          companyId: data.companyId,
                        });
                      }}
                      disabled={postId.includes(data.id) ? true : false}
                    >
                      {postId.includes(data.id) ? "Request sent" : "Apply"}
                    </button> */}
                    </Card.Body>
                  </Card>
                );
              })}
          </div>

          <div
            style={{ display: !showPosts ? "" : "none" }}
            className={style.suggestionsBody}
          >
            <h2>Employees</h2>
            {companyData.employees ? (
              companyData.employees.length > 0 ? (
                companyData.employees.map((employee, index) => {
                  return (
                    <Card key={index} className={style.cards}>
                      <Card.Header
                        as="h3"
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
