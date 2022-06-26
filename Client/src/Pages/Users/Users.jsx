import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserInfo,
  getActivePlans,
  updatePremiumPlan,
} from "../../Redux/Actions/Actions";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Users() {
  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const loggedUser = useSelector((state) => state.myUser);
  const loggedCompany = useSelector((state) => state.myCompany);
  const [ownProfile, setOwnProfile] = useState(false);
  const userData = useSelector((state) => {
    // console.log(state);
    return {
      ...state.user,
      postulates: [...state.postulatesUser],
      plans: [...state.activePlans],
    };
  });

  console.log(userData);
  useEffect(() => {
    getUserInfo(username).then((action) => {
      dispatch(action);
    });
    if (loggedUser.name === username) {
      setOwnProfile(true);
    }
    dispatch(getActivePlans(user));
    if (loggedUser.id) {
      updatePremiumPlan(loggedUser?.id, userData.plans).then((res) => {
        dispatch(res);
      });
    }
    //eslint-disable-next-line
  }, []);

  //----------------------------------
  const sendMessage = async () => {
    try {
      const res = await axios.get(`/users/` + username);
      if (loggedUser.id) {
        let conversationUser = {
          senderId: loggedUser.id,
          receiverId: res.data.id,
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

  const years = (date) => {
    let now = new Date();
    let birth = new Date(date);
    let diff = (now.getTime() - birth.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  };

  //----------------------------------

  return (
    <>
      <Navbar />
      <div className={style.containerPerfil}>
        <div className={style.header}>
          <h2>About</h2>
          <hr />
          <div className={style.picture}>
            <img
              src={
                userData.image
                  ? userData.image
                  : "https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg"
              }
              alt="perfil"
            />
            <h2>{userData?.name}</h2>
          </div>
          <div className={style.about}>
            <p>Status: {userData?.employment_status}</p>
            <p>Email: {userData?.email}</p>
            <p>Age: {years(userData?.age)} Years Old</p>
            <p>Nationality: {userData?.nationality}</p>
            Technologies:
            <ul>
              {userData.technologiesName?.map((d, i) => {
                return <li key={i}>{d}</li>;
              })}
            </ul>
            <p>
              Linkedin/etc... :{" "}
              <a
                href={"https://" + userData.url}
                target="_blank"
                rel="noopener , noreferrer"
              >
                {userData.url}
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
              style={{ display: !ownProfile ? "" : "none" }}
            >
              Message
            </button>
            <button
              className={style.Button}
              style={{ display: ownProfile ? "" : "none" }}
              onClick={() => navigate(`/users/${loggedUser.name}/edit`)}
            >
              Edit Profile
            </button>
          </div>
          {userData.plans[0] !== "You don't have any plan" &&
          userData.plans[0] !== "To see your plans, please log in" ? (
            <>
              <h2>My posts</h2>
              <hr />
              <button className={style.Button}>Create a Post</button>
            </>
          ) : null}
        </div>
        <div className={style.perfilInfo}>
          <div className={style.info}>
            <h2>Information</h2>
            <p>{userData?.description}</p>
            <hr />
            {userData.plans ? <h3>Your active plans </h3> : null}
            {userData.plans?.map((d, i) => {
              return <p key={i}>{d}</p>;
            })}
            <button
              className={style.Button}
              disabled={
                userData.plans[0] === "You don't have any plan" ||
                userData.plans[0] === "To see your plans, please log in"
                  ? true
                  : false
              }
            >
              Decline subscription
            </button>
            <hr />
            <div>
              <button
                className={style.Button}
                onClick={() => {
                  window.open(
                    "https://" + userData.cv,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
