import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../../Redux/Actions/Actions";
import image from "./perfilPicture.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from 'axios';


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
    })
    if (loggedUser.name === username) {
      setOwnProfile(true);
    }
    //eslint-disable-next-line
  }, []);

  //----------------------------------
  const userData = useSelector((state) => state.user);


  const sendMessage = async () => {
    try{
      const res = await axios.get(`/users/` + username)
      let conversation = {senderId: loggedUser.id, receiverId: res.data.id}
      await axios.post("/conversation/", conversation)
      navigate("/messenger")
    }catch(error){
      console.log(error)
    }
  }

  //----------------------------------

  return (
    <div className={style.containerPerfil}>
      <div className={style.header}>
        <div className={style.picture}>
          <img src={image} alt="perfil" />
          <h2>{username}</h2>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            style={{ display: !ownProfile ? true : "none" }}
          >
            Go to home
          </Button>
          <Button
          onClick={sendMessage}
          style={{ display: !ownProfile ? "" : "none" }}
          >Message
          </Button>
          <Button
            style={{ display: ownProfile ? "" : "none" }}
            onClick={() => navigate(`/users/${loggedUser.name}/edit`)}
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <div className={style.suggestions}>
        <h2>Suggestions</h2>
      </div>
      <div className={style.perfilInfo}>
        <div className={style.about}>
          <h2>About</h2>
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
        <div className={style.info}>
          <h2>info</h2>
          <p>{userData?.description}</p>
          <hr />

          <div style={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                window.open(
                  "https://" + userData.cv + "/",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
