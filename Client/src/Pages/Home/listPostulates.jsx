import style from "./homeCompany.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ListPostulates({ props }) {
  const navigate = useNavigate();

  return (
    <div className={style.containerList}>
      <div>
        <h1>Postulates</h1>
        <br />
        <br />

        {props.length ? (
          props.map((data, index) => {
            return (
              <div key={index} className={style.cardPostulate}>
                <span
                  onClick={() => navigate(`/users/${data.name}`)}
                  className={style.spanName}
                >
                  {data.name}
                </span>

                <Button variant="primary">
                  <a href={data.url} download>
                    Download CV
                  </a>
                </Button>
              </div>
            );
          })
        ) : (
          <h3>No Postulates</h3>
        )}
      </div>
    </div>
  );
}
