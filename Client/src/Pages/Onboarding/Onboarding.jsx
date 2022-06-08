import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <Card.Header>Hello new User!</Card.Header>
      <Card.Body>
        <Card.Title>Please choose your use preference</Card.Title>
        <Card.Text>You can choose between these two options</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/register/user");
          }}
        >
          User
        </Button>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={() => {
            navigate("/register/company");
          }}
        >
          Company
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}
