import React, { useRef } from "react";
import axios from "axios";
import style from "./Messenger.module.css";
import Conversation from "../../Components/Conversation/conversation.jsx";
import Message from "../../Components/Message/Message.jsx";
import ChatOnline from "../../Components/ChatOnline/ChatOnline.jsx";
import Navbar from "../../Components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";

export default function Messenger() {
  const user = useSelector((state) => state.myUser);
  const Company = useSelector((state) => state.myCompany);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();
  console.log("LA COMPAÑIA", Company.name);
  console.log("EL USUARIO", user);
  // ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    socket.current = io("https://socket-for-chat.herokuapp.com/");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.sender,
        texto: data.texto,
        hour: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage && arrivalMessage.sender.length < 10) {
      arrivalMessage &&
        currentChat?.members.includes(Number(arrivalMessage.sender)) &&
        setMessages((prev) => [...prev, [arrivalMessage]]);
    } else if (arrivalMessage) {
      currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, [arrivalMessage]]);
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (user.id) {
      socket.current.emit("addUser", user.id);
    } else if (Company.id) {
      socket.current.emit("addUser", Company.id);
    }
    socket.current.on("getUsers", (users) => {});
  });

  // ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    const obtenerConversacion = async () => {
      try {
        if (user.id) {
          console.log("userId", user.id);
          const res = await axios.get(`/conversation/` + Number(user.id));
          setConversations(res.data);
        } else if (Company.id) {
          const res = await axios.get(`/conversation/` + Company.id);
          setConversations(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerConversacion();
  }, [Company, user]);

  // ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `/conversation/id/` + Number(currentChat?.id)
        );
        setMessages(res.data?.text);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);
  // ----------------------------------------------------------------------------------------------------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.id) {
      var message = {
        id: currentChat.id,
        senderId: user.id,
        texto: newMessage,
      };
      const receiverId = currentChat.members.find(
        (x) => Number(x) !== Number(user.id)
      );
      socket.current.emit("sendMessage", {
        sender: user.id,
        texto: newMessage,
        receiverId,
      });
    } else if (Company.id) {
      message = {
        id: currentChat.id,
        senderId: Company.id,
        texto: newMessage,
      };
      const receiverId = currentChat.members.find((x) => x !== Company.id);
      socket.current.emit("sendMessage", {
        sender: Company.id,
        texto: newMessage,
        receiverId,
      });
    }

    try {
      const res = await axios.post("/conversation/", message);
      setMessages(messages ? [...messages, res.data] : [res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // ----------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ----------------------------------------------------------------------------------------------------------//
  return (
    <div>
      <div>
        <Navbar />
        <div className={style.messenger}>
          <div className={style.chatMenu}>
            <div className={style.chatMenuContainer}>
              <SearchBar />
              {conversations.map((c, index) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation
                    key={index}
                    conversation={c}
                    currentUser={user.id ? user : Company}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={style.chatBox}>
            <div className={style.chatBoxContainer}></div>
            {currentChat ? (
              <div>
                <div className={style.chatBoxTop}>
                  {messages
                    ? messages.map((x) =>
                        x.map((m) => (
                          <div ref={scrollRef}>
                            <Message
                              message={m}
                              friend={m.sender !== user.id ? m.sender : null}
                              own={
                                (m.sender.length < 10
                                  ? Number(m.sender)
                                  : m.sender) ===
                                (user.id ? Number(user.id) : Company.id)
                              }
                            />
                          </div>
                        ))
                      )
                    : null}
                </div>
                <div className={style.chatBoxBottom}>
                  <textarea
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    className={style.chatMessageInput}
                    placeholder="Write something..."
                  ></textarea>
                  <button
                    onClick={handleSubmit}
                    className={style.chatSubmitButton}
                  >
                    Send
                  </button>
                </div>
              </div>
            ) : (
              <span className={style.noOpenChat}>
                Open a conversation to start a chat
              </span>
            )}
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
      </div>{" "}
      :
    </div>
  );
}
