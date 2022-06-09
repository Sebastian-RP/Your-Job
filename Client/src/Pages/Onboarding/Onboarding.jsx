import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  const search = useLocation().search;
  const state = new URLSearchParams(search).get("state");

  return (
    <Card className="text-center">
      <Card.Header>Hello new User!</Card.Header>
      <Card.Body>
        <Card.Title>Please choose your use preference</Card.Title>
        <Card.Text>You can choose between these two options</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/register/user/${state}`);
          }}
        >
          User
        </Button>
        <br />
        <br />
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/register/company/${state}`);
          }}
        >
          Company
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}
