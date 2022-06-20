import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../../Redux/Actions/Actions";
import image from "./perfilPicture.png";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavBar/NavBar";

export default function Users() {
  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const loggedUser = useSelector((state) => state.myUser);
  const [ownProfile, setOwnProfile] = useState(false);

  useEffect(() => {
    console.log(username);
    console.log(loggedUser.name);
    console.log(ownProfile);
    getUserInfo(username).then((action) => {
      dispatch(action);
    });
    if (loggedUser.name === username) {
      setOwnProfile(true);
    }
    //eslint-disable-next-line
  }, []);

  //----------------------------------
  const userData = useSelector((state) => state.user);

  const sendMessage = async () => {
    try {
      const res = await axios.get(`/users/` + username);
      let conversation = { senderId: loggedUser.id, receiverId: res.data.id };
      await axios.post("/conversation/", conversation);
      navigate("/messenger");
    } catch (error) {
      console.log(error);
    }
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
            <img src={image} alt="perfil" />
            <h2>{username}</h2>
          </div>
          <div className={style.about}>
            <p>Status: {userData?.employment_status}</p>
            <p>Email: {userData?.email}</p>
            <p>Age: {userData?.age}</p>
            <p>Nationality: {userData?.nationality}</p>
            Technologies:
            <ul>
              {userData.technologiesName?.map((d, i) => {
                return <li key={i}>{d}</li>;
              })}
            </ul>
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
          <h2>Suggestions</h2>
        </div>
        <div className={style.perfilInfo}>
          <div className={style.info}>
            <h2>Information</h2>
            <p>{userData?.description}</p>
            <hr />

            <div style={{ textAlign: "right" }}>
              <button
                className={style.Button}
                onClick={() => {
                  window.open(
                    "https://" + userData.cv + "/",
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
