import styles from "./Message.module.css"
import {format} from "timeago.js"

export default function Message({message, own}) {
  return (
    <div className={ own ? styles.messageOwn : styles.message}>
      <div className={styles.messageTop}>
        <img className={styles.messageImg} src="https://randomuser.me/api/portraits/women/19.jpg" alt="prueba foto" />
        <p className={styles.messageText}>{message.texto}</p>
      </div>
      <div className={styles.messageBottom}>{format(message.hour)}</div>
    </div>
  )
}
