import styles from "./Message.module.css"

export default function Message({own}) {
  return (
    <div className={ own ? styles.messageOwn : styles.message}>
      <div className={styles.messageTop}>
        <img className={styles.messageImg} src="https://randomuser.me/api/portraits/women/19.jpg" alt="prueba foto" />
        <p className={styles.messageText}>Test message</p>
      </div>
      <div className={styles.messageBottom}>1 hour ago</div>
    </div>
  )
}
