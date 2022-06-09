import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

export default function RegisterCompany() {
  const { state } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.replace(
      `https://dev-zgaxo6rs.us.auth0.com/continue?state=${state}`
    );
  };

  return (
    <div>
      <Button variant="primary" size="lg" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </div>
  );
}
