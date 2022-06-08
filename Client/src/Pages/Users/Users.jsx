import React, { useEffect } from "react";
import image from "./perfilPicture.png";
import style from "./perfil.module.css";
import { useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getUserInfo } from "../../Redux/Actions/Actions";

export default function Users() {

  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo());
  },[])
  //----------------------------------
  const { user } = useParams();
  return (
    
      
      <div className={style.containerPerfil}>
      <div className={style.header}>
        <div className={style.picture}>
          <img src={image} alt="perfil-picture" />
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

          </div>
          <div className={style.info}>
            <h2>info</h2>

          </div>
      </div>
    </div>

      
  
  );
}
