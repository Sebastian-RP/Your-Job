import style from "./Post.module.css";
export default function Post({ Author, Message }) {
  return (
    <>
      <li className={style.post}>
        <div className={style.profile}>
          <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" width={"50px"} />
          <p>{Author}</p>
          <p>{Math.floor(Math.random() * 24)}:00 PM</p>
          <button className={style.button}>Follow</button>
        </div>
        <div className={style.container}>
          <h4 className={style.title}>Trabajando de gratis</h4>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi animi voluptate quas magni dicta repellat unde ipsum, aspernatur
            corrupti velit alias officia, laudantium dolorem itaque, expedita modi natus corporis!
          </p>
          <button className={style.button}>Know more</button>
          <ul className={style.menu__interaction}>
            <li>
              <i className="fa-regular fa-message"></i> {Math.floor(Math.random() * 1000)}
            </li>
            <li>
              <i className="fa-regular fa-heart"></i> {Math.floor(Math.random() * 1000)}{" "}
            </li>
            <li>
              <i className="fa-regular fa-face-angry"></i> {Math.floor(Math.random() * 1000)}
            </li>
          </ul>
        </div>
      </li>
      <hr />
    </>
  );
}
