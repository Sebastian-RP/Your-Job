import React from 'react'
import style from "./Messenger.module.css"
import Conversation from '../../Components/Conversation/conversation.jsx'
import Message from '../../Components/Message/Message.jsx'
import ChatOnline from "../../Components/ChatOnline/ChatOnline.jsx"
import Navbar from "../../Components/NavBar/NavBar.jsx"
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getUserInfo, getConversations } from "../../Redux/Actions/Actions";



export default function Messenger() {
  // const Allconversations = useSelector((state) => state.conversations);
  // const user = useSelector((state) => state.user);
  // const [conversations, setConversations] = useState([])
  // const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className={style.messenger}>
      <div className={style.chatMenu}>
        <div className={style.chatMenuContainer}>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />

        </div>
      </div>
      <div className={style.chatBox}>
      <div className={style.chatBoxContainer}></div>
      <div className={style.chatBoxTop}>
        <Message own={false} />
        <Message own={true} />
        <Message own={false} />
        <Message own={true} />
        <Message own={false} />
        <Message own={true} />
        <Message own={false} />
        <Message own={true} />
      </div>
      <div className={style.chatBoxBottom}>
        <textarea className={style.chatMessageInput} placeholder='Write something...' ></textarea>
        <button className={style.chatSubmitButton}>Send</button>
      </div>
      </div>
      <div className={style.chatOnline}>
      <div className={style.chatOnlineContainer}>Online</div>
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />

      </div>

      {/* {
        Allconversations.map((conversation) => (
        <Conversation conversations={conversation} currentUser={user.id} />    
        ))
      } */}
        {/* <Conversation />     */}
        {/* <Message /> */}
        {/* <ChatOnline /> */}



        </div>
    </div>
  )
}
