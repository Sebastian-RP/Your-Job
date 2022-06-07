import { useParams, Link } from "react-router-dom";

export default function Users() {
  const { user } = useParams();
  return (
    <>
      <h1>{user}</h1>
      <Link to={"/"}>Go to home</Link>
    </>
  );
}
