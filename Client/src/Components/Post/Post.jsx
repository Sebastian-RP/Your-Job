import style from "./Post.module.css";
export default function Post({ Author, Message }) {
  return (
    <>
      <li className={style.post}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "20%", margin: "30px 0px" }}>
          <img src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" width={"50px"} />
          <p>{Author}</p>
          <p>{Math.floor(Math.random() * 24)}:00 PM</p>
          <button>Follow</button>
        </div>
        <div style={{ width: "60%", margin: "0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi animi voluptate quas magni dicta repellat unde ipsum, aspernatur
          corrupti velit alias officia, laudantium dolorem itaque, expedita modi natus corporis!
          <button style={{ margin: "20px 0px" }}>Know more</button>
          <ul style={{ display: "flex", width: "100%", justifyContent: "space-between", listStyle: "none", marginTop: "10px" }}>
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
