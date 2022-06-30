import React from "react";
import Styles from "./Notifications.module.css"
import notification from "../../image/notification.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  cleanNotification,
} from "../../Redux/Actions/Actions.js";


export default function Notifications() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  var notifications = useSelector((state) => state.notificationChat)
  console.log("notificaciones papa",notifications);
  const [newNotifications, setNewNotifications] = useState([])
  console.log(notifications? notifications[0] : 0);
  console.log("notificaciones papaaass",newNotifications);

  const displayNotification =  ({texto}) => {
    return (
      <p className="notification">{`New message: ${texto}`}</p>
    );
  };
  useEffect(() => {
    setNewNotifications(notifications.length ? notifications[0] : [])
  }, [notifications])

  const handleRead = async () => {
    setOpen(false);
    try{
      dispatch(cleanNotification())
    }catch(error){
      console.log(error)
    }
  };

  return (
      <div className="icons">
    <div className="icon" onClick={() => setOpen(!open)}>
      <img className={Styles.notification} src={notification} alt="Notification" />
      {
          newNotifications?.length &&
            <div className={Styles.counter}>{(newNotifications).length}</div>
          }
        </div>
      {open && (
        <div className={Styles.notificationss}>
          {newNotifications?.map((n) => displayNotification(n))}
          <button className={Styles.nButton} onClick={handleRead}>
            clean
          </button>
        </div>
      )}
      </div>
  );
}
