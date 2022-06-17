import React, { useRef } from 'react';
import axios from 'axios';
import style from "./Messenger.module.css"
import Conversation from '../../Components/Conversation/Conversation.jsx'
import Message from '../../Components/Message/Message.jsx'
import ChatOnline from "../../Components/ChatOnline/ChatOnline.jsx"
import Navbar from "../../Components/NavBar/NavBar.jsx"
import { useState, useEffect, } from 'react';
import { useSelector } from "react-redux";
import {io} from "socket.io-client";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";


export default function Messenger() {
  const user = useSelector((state) => state.myUser);
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const socket = useRef()
  const scrollRef = useRef()
// ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage", data => {
      console.log("data",data)
      setArrivalMessage({
        sender: data.sender,
        texto: data.texto,
        hour: Date.now()
      })
    })
  },[])

  useEffect(()  => {
    arrivalMessage && currentChat?.members.includes(Number(arrivalMessage.sender)) &&
    setMessages((prev) => [...prev, [arrivalMessage]])
    console.log("ArrivalMessage", arrivalMessage)
  }, [arrivalMessage, currentChat])

  useEffect(()=> {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      console.log("usuarios",users)
    })
  })

// ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    const obtenerConversacion = async () => {
      try{
        const res = await axios.get(`/conversation/` + Number(user.id))
        setConversations(res.data)
        console.log("resp",res.data)
      }catch(error){
        console.log(error)
      }
    }
    obtenerConversacion()
  }, [user])

// ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    const getMessages = async () => {
      try{
        const res = await axios.get(`/conversation/id/` + Number(currentChat?.id))
        console.log("2121",res.data)
        setMessages(((res.data)?.text))
      }catch(error){
        console.log(error)
      }
    }
    getMessages()
  }, [currentChat])
  console.log("mensaje",messages)
// ----------------------------------------------------------------------------------------------------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      id: currentChat.id,
      senderId: user.id,
      texto: newMessage
    }

    const receiverId = currentChat.members.find((x)=> Number(x) !== Number(user.id))
    socket.current.emit("sendMessage", {
      sender: user.id,
      texto: newMessage,
      receiverId
    })
    try{
      const res = await axios.post("/conversation/" , message)
      console.log("setmessage",res.data)
      setMessages( messages ? [...messages, res.data] : [res.data] )
      setNewMessage("")
    }catch(error){
      console.log(error)
    }
  }
  console.log("current",currentChat);

// ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior : "smooth"})
  }, [messages])



// ----------------------------------------------------------------------------------------------------------//
  return (
    <div>
    <div>
      <Navbar />
      <div className={style.messenger}>
      <div className={style.chatMenu}>
        <div className={style.chatMenuContainer}>
          <SearchBar />
          { conversations.map((c,index) => (
            <div onClick={() => setCurrentChat(c)}>
              <Conversation key={index} conversation={c} currentUser={user}/>
            </div>
          ))}
        </div>
      </div>
      <div className={style.chatBox}>
      <div className={style.chatBoxContainer}></div>
      {
        currentChat ?
        (
        <div> 
      <div className={style.chatBoxTop}>
        {
          messages ? messages.map(x => x.map((m) => (
            <div ref={scrollRef}>
            <Message message={m} own={Number(m.sender) === Number(user.id)} />
            </div>
          ))) : null
        }
      </div>
      <div className={style.chatBoxBottom}>
        <textarea onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className={style.chatMessageInput} placeholder='Write something...' ></textarea>
        <button onClick={handleSubmit} className={style.chatSubmitButton}>Send</button>
      </div>
      </div>
      ) : (
            <span className={style.noOpenChat}>
            Open a conversation to start a chat
            </span>
      )
      }
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
        </div>
    </div> : 
    </div>
  )
}
