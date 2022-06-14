import React from 'react';
import style from "./Conversation.module.css"
// import { useState, useEffect } from 'react';


export default function conversation({conversation, currentUser}) {
  // const [user,setUser] = useState(null)
  // useEffect(() => {
  //   const friendId = conversation.member.find(x=> x !== currentUser.id)
  //   const getUser = "en proceso"
  // }, [currentUser.id])
  return (
    <div className={style.conversation}>
      <img className={style.conversationImg} src="https://randomuser.me/api/portraits/women/19.jpg" alt="user profile pic" />
      <span className={style.conversationName}>Maria Alejandra</span>
    </div>
  )
}
