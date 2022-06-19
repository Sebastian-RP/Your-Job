import style from "./AdPost.module.css";

export default function AdPost({ Company, Message }) {
  return (
    <>
      <li className={style.container}>
        <h5>{Company}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis nesciunt similique? Distinctio velit dolorem quia iusto? Dolorem
          nostrum suscipit, aut voluptatem animi tempore accusantium natus illum dolor itaque nisi.
        </p>
        <button className={style.button}>Contact</button>
      </li>
      <hr />
    </>
  );
}
