import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserInfo,
  getActivePlans,
  updatePremiumPlan,
  allPostulatesUser
} from "../../Redux/Actions/Actions";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import canceledSubscription from "../../Components/Firebase/canceledSubscription";
import {AiOutlineDelete} from 'react-icons/ai'
import { IoMdInformationCircleOutline } from "react-icons/io";
import swal from "sweetalert";

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
  const userPostulates = useSelector(state => state.userPostulates)
  const userData = useSelector((state) => {
    return {
      ...state.user,
      postulates: [...state.postulatesUser],
      plans: [...state.activePlans],
    };
  });

  useEffect(() => {
    dispatch(allPostulatesUser(username))
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

  const handlerCanceledSubscription = async (e) => {
    try {
      if(e === "todo"){
        canceledSubscription(user?.email, e)
        .then((res) => {
          swal({
            title: "Success!",
            text: "All the subscription has been canceled",
            icon: "success",
            buttons:true
          }).then((data) => {
            if(data) navigate("/home");
          });
        }
        )
        .catch((err) => {
          console.log(err);
        }
        );
      } else{
        canceledSubscription(user?.email, e)
        .then((res) => {
          swal({
            title: "Success!",
            text: `The subscription ${e} has been canceled`,
            icon: "success",
            buttons:true
          }).then((data) => {
            if(data) navigate("/home");
          });
        }
        )
        .catch((err) => {
          swal({
            title: "Opps!",
            text: `Something gones wrong, please try again later`,
            icon: "error",
            buttons:true
          }).then((data) => {
            if(data) navigate("/home");
          });        
        }
        );
      }
      dispatch(getActivePlans(user));
      updatePremiumPlan(loggedUser?.id, userData.plans).then((res) => {
        dispatch(res);
      }); 
    } catch (error) {
      console.log(error);
    }
  }

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
          {
            userPostulates?.map((data, index) => {
              return (
                <div key={index} className={style.CardPost}>
                  <strong>{data.titlePost}</strong>
                  <hr />
                  <p>Experience: {data.experience}</p>
                  <p>Modality: {data.modality}</p>
                </div>
              )
            })
          }
        </div>
        <div className={style.perfilInfo}>
          <div>
            <h2>Information <IoMdInformationCircleOutline/></h2>
            <div className={style.info}>
              <p>{userData?.description}</p>
            </div>
            <hr />
            {userData.plans ? <h3>Your active plans </h3> : null}
            {userData.plans?.map((d, i) => {
              return (
                <div className={style.subscriptions}>
                  <>
                    <p key={i}>{d}</p>
                  </>
                  { (userData.plans[0] !== "You don't have any plan" &&
                    userData.plans[0] !== "To see your plans, please log in") ? (
                      <div className={style.ButtonX} 
                      onClick={() => handlerCanceledSubscription(d)}
                      >
                        <AiOutlineDelete/>
                      </div>) : null}
                </div>);
            })}
            <button
              className={style.Button}
              disabled={
                userData.plans[0] === "You don't have any plan" ||
                userData.plans[0] === "To see your plans, please log in"
                  ? true
                  : false
              }
              onClick={() => handlerCanceledSubscription("todo")}
            >
              Decline all subscriptions
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
