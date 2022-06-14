import styles from "./chatOnline.module.css"

export default function ChatOnline() {
  return (
    <div className={styles.chatOnline}>
      <div className={styles.chatOnlineFriend}>
        <div className={styles.chatOnlineImgContainer}>
        <img className={styles.ChatImg} src="https://randomuser.me/api/portraits/women/19.jpg" alt="prueba foto" />
        <div className={styles.chatOnlineCircle}></div>
        </div>
        <span className={styles.chatOnlineName}>Maria Alejandra</span>
      </div>
    </div>
  )
}
