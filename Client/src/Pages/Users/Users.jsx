import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserInfo } from "../../Redux/Actions/Actions";

export default function Users() {
  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const dispatch = useDispatch();
  const { user } = useParams();
  useEffect(() => {
    getUserInfo(user).then((action) => {
      dispatch(action);
    });
    //eslint-disable-next-line
  }, []);
  //----------------------------------
  const userData = useSelector((state) => state.user);
  return (
    <div className={style.containerPerfil}>
      <div className={style.header}>
        <div className={style.picture}>
          <img src={userData?.image} alt="perfil" />
          <h2>{user}</h2>
        </div>
        <div>
          <Link to={"/"}>Go to home</Link>
        </div>
      </div>
      <div className={style.suggestions}>
        <h2>Suggestions</h2>
      </div>
      <div className={style.perfilInfo}>
        <div className={style.about}>
          <h2>About</h2>
          <p>Email: {userData?.email}</p>
          <p>Status: {userData?.employment_status}</p>
          <p>Age: {userData?.age}</p>
          <p>Nationality: {userData?.nationality}</p>
        </div>
        <div className={style.info}>
          <h2>info</h2>
          <p>{userData?.description}</p>
          <hr />
          <div>
            <ul>
              {userData?.technologies?.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
            </ul>
          </div>
          <div style={{ textAlign: "right" }}>
            <a href={userData?.CVurl}>download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}
