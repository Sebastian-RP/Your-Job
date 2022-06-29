import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Suggestions.module.css";
export default function Suggestions() {
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const [num, setNum] = useState(0);
  const companiesPremium = [...selector.companies].filter(
    (data) => data.premium === 2
  );
  const suggestions = companiesPremium.slice(num, num + 2);

  useEffect(() => {

    !num && setNum(Math.floor(Math.random() * (companiesPremium.length - 3)));
    // eslint-disable-next-line
  }, [selector]);

  return (
    <aside className={style.announces}>
      <h1>Suggestions</h1>
      <ul>
        <>
          {suggestions.map((data, index) => (
            <Card
              bg="secondary"
              key={index}
              text="light"
              style={{ width: "18rem", cursor: "pointer" }}
              className="mb-2"
              onClick={() => {
                navigate(
                  `/company/${data.company?.name}`
                );
              }}
            >
              <Card.Header>
                <strong>Email:</strong> {data.email}
                <br />
                <strong>Phone:</strong> {data.phone}
              </Card.Header>
              <Card.Body>
                <Card.Title> {data.name} </Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      </ul>
    </aside>
  );
}
