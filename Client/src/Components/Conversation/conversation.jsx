import React from 'react';
import axios from 'axios';
import style from "./Conversation.module.css"
import { useState, useEffect } from 'react';


export default function Conversation({conversation, currentUser}) {
  const [usuario,setUsuario] = useState(null);
  
  useEffect(() => {
    const friendId = Number(conversation.members.find((x)=> Number(x) !== Number(currentUser.id)))
    const getFriend = async () => {
      try{
        const res = await axios.get(`http://localhost:3001/users/id/` + friendId)
        setUsuario(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getFriend()
  }, [conversation, currentUser])
  return (
    <div className={style.conversation}>
      <img className={style.conversationImg} src={usuario?.image ? usuario.image : "https://randomuser.me/api/portraits/women/19.jpg" } alt="user profile pic" />
      <span className={style.conversationName}>{usuario?.name}</span>
    </div>
  )
}
