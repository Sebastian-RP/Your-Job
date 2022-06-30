import React from "react";
import axios from "axios";
import style from "./Conversation.module.css";
import { useState, useEffect } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    try {
      if (Number(currentUser.id)) {
        let friendId = conversation.members.find(
          (x) => x !== currentUser.id.toString()
        );
        const getFriend = async () => {
          if (friendId.length < 10) {
            let res = await axios.get(`/users/id/` + friendId);
            setUsuario(res.data);
          } else {
            let rest = await axios.get(`/company/` + friendId);
            setUsuario(rest.data);
          }
        };
        getFriend();
      } else {
        let friendId2 = conversation.members.find((x) => x !== currentUser.id);
        const getFriend = async () => {
          if (friendId2.length < 10) {
            let res = await axios.get(`/users/id/` + friendId2);
            setUsuario(res.data);
          } else {
            let res = await axios.get(`/company/` + friendId2);
            setUsuario(res.data);
          }
        };
        getFriend();
      }
    } catch (error) {
      console.error(error);
    }
  }, [conversation, currentUser]);
  return (
    <div className={style.conversation}>
      <img
        className={style.conversationImg}
        src={
          usuario?.image
            ? usuario.image
            : "https://vinasderoaabogados.es/wp-content/uploads/2015/11/usuario-sin-foto.gif"
        }
        alt="user profile pic"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://vinasderoaabogados.es/wp-content/uploads/2015/11/usuario-sin-foto.gif";
        }}
      />
      <span className={style.conversationName}>{usuario?.name}</span>
    </div>
  );
}
