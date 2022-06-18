import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Accordion, Card, Button } from "react-bootstrap";
import swal from "sweetalert";
import {
  getAllCompanies,
  getAllPost,
  getAllTechnologies,
  getPostulates,
  getUserByEmail,
  postulateJob,
} from "../../Redux/Actions/Actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../Users/perfilPicture.png";

const Modality = ["remoto", "presencial"];
const Experience = ["trainig", "junior", "semi-senior", "senior"];
const salario = ["min-salary", "max-salary"];

export default function HomeUser() {
  const { logout, user, isAuthenticated, loginWithPopup } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const [posts, setPosts] = useState(null);
  const [num, setNum] = useState(null);
  const [postId, setPostId] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const allTechnologies = [...selector.technologies];
  const companies = [...selector.companies];
  const logged = useSelector((state) => state.myUser);
  const suggestions = companies.slice(Math.floor(num), Math.floor(num) + 2);
  const postulatesUser = selector.postulatesUser;

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
    dispatch(getAllTechnologies());
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    console.log(selector);
    console.log(user?.email);
    console.log(logged);
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, [user]);

  // el useState llamado NUM y este useEffect hacen que la sugerencia de las
  //empresas no sean la mismas siempre.
  // y setea los posts en un estado local para hacer los filtros desde acá
  useEffect(() => {
    setPosts(selector.posts);
    setNum(Math.random() * (companies.length - 3));
    // eslint-disable-next-line
  }, [selector]);
  //----------------------------------------------------
  useEffect(() => {
    postulatesUser.length &&
      postulatesUser.map((data) => {
        return setPostId([...postId, data.companyPostId]);
      });
    // eslint-disable-next-line
  }, [postulatesUser]);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 2000);
  }, []);

  const getFilterByTechnologies = (id) => {
    console.log(id);
    setPosts(posts.filter((data) => data.technologiesId.includes(id)));
  };
  const filterByCompany = (name) => {
    setPosts(posts.filter((data) => data.company.name === name));
  };
  const filterByModality = (data) => {
    setPosts(posts.filter((d) => d.modality === data));
  };
  const filterByExperience = (data) => {
    setPosts(posts.filter((d) => d.experience === data));
  };
  const filterBySalary = (data) => {
    const salary = selector.posts;
    if (data === "min-salary") {
      for (let i = 0; i < salary.length - 1; i++) {
        for (let j = i + 1; j < salary.length; j++) {
          if (salary[j].max_salary < salary[i].max_salary) {
            let current = salary[i];
            salary[i] = salary[j];
            salary[j] = current;
          }
        }
      }
      setPosts([...salary]);
    } else {
      for (let i = 0; i < salary.length - 1; i++) {
        for (let j = i + 1; j < salary.length; j++) {
          if (salary[j].max_salary > salary[i].max_salary) {
            let current = salary[i];
            salary[i] = salary[j];
            salary[j] = current;
          }
        }
      }
      setPosts([...salary]);
    }
  };
  const handlerPostulate = (val) => {
    if (!isAuthenticated) {
      return loginWithPopup();
    } else {
      if (logged.error) {
        return swal({
          title: "Oops!",
          text: "It seems like you haven't finished your profile, click Ok to finish it!",
          icon: "error",
        }).then(() => {
          navigate("/onboarding");
        });
      }
    }
    const { name, url, postId } = val;

    dispatch(postulateJob({ name, url, postId }))
      .then((res) => swal("Listo!", res.data, "success"))
      .then(() => dispatch(getPostulates(user.email)));
  };

  return (
    <div className={style.containerHome}>
      <>
        <Navbar />
        {showPage ? (
          <>
            <div className={style.containerActions}>
              <div className={style.filters}>
                <div className={style.image}>
                  <img src={user.picture} alt="profile_picture" />
                  <p>Welcome {logged.error ? "Guest" : logged.name}!</p>
                  {posts !== selector.posts && (
                    <Button
                      variant="success"
                      onClick={() => setPosts(selector.posts)}
                    >
                      Clear Filter
                    </Button>
                  )}
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Technologies</Accordion.Header>
                    {allTechnologies?.map((d, i) => {
                      return (
                        <Accordion.Body
                          style={{ padding: "5px", cursor: "pointer" }}
                          key={i}
                          onClick={() => getFilterByTechnologies(d.id)}
                        >
                          {d.name}
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Salary</Accordion.Header>
                    {salario.map((data, index) => {
                      return (
                        <Accordion.Body
                          key={index}
                          onClick={() => filterBySalary(data)}
                          style={{ cursor: "pointer" }}
                        >
                          {data}
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Company</Accordion.Header>
                    <div
                      style={{
                        maxHeight: "300px",
                        overflowY: "scroll",
                        cursor: "pointer",
                      }}
                    >
                      {companies.map((d, i) => {
                        return (
                          <Accordion.Body
                            style={{ padding: "2px" }}
                            key={i}
                            onClick={() => filterByCompany(d.name)}
                          >
                            {d.name}
                            <hr />
                          </Accordion.Body>
                        );
                      })}
                    </div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Modality</Accordion.Header>
                    {Modality.map((data, index) => {
                      return (
                        <Accordion.Body
                          key={index}
                          onClick={() => filterByModality(data)}
                          style={{ cursor: "pointer" }}
                        >
                          {data}
                          <hr />
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Experience</Accordion.Header>
                    {Experience.map((data, index) => {
                      return (
                        <Accordion.Body
                          key={index}
                          onClick={() => filterByExperience(data)}
                          style={{ cursor: "pointer" }}
                        >
                          {data}
                          <hr />
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className={style.infoPost}>
                <div className={style.columnInfoRight}>
                  <h3>Suggestions</h3>
                  <>
                    {suggestions.map((data, index) => (
                      <Card
                        bg="secondary"
                        key={index}
                        text="light"
                        style={{ width: "18rem" }}
                        className="mb-2"
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
                  <div className={style.columInfo}></div>
                </div>
                <div className={style.columnPost}>
                  {posts.length ? (
                    posts.map((data, index) => {
                      return (
                        <div className={style.cardPost} key={index}>
                          <Card>
                            <Card.Header as="h5">
                              <label>Oferta Laboral</label> -{" "}
                              <label
                                className={style.companyName}
                                onClick={() => {
                                  navigate(`/users/${data.company?.name}`);
                                }}
                              >
                                {" "}
                                {data.company?.name}{" "}
                              </label>
                            </Card.Header>
                            <Card.Body>
                              <Card.Title>{data.TitlePost}</Card.Title>
                              <Card.Text style={{ textAlign: "start" }}>
                                {data.descripcion}
                                <br />
                                <strong>Experience:</strong> {data.experience}
                                <br />
                                <strong>Min-Salary:</strong> {data.min_salary}
                                <br />
                                <strong>Max-Salary:</strong> {data.max_salary}
                                <br />
                                <strong>Modality:</strong> {data.modality}
                                <br />
                                <strong>Technologies:</strong>
                                <>
                                  {data.technologiesId.map((data, i) => {
                                    let tech = allTechnologies.find(
                                      // eslint-disable-next-line
                                      (t) => t.id == data
                                    );
                                    return <li key={i}>{tech?.name}</li>;
                                  })}
                                </>
                              </Card.Text>
                              <Button
                                variant={
                                  postId.includes(data.id)
                                    ? "secondary"
                                    : "primary"
                                }
                                onClick={() =>
                                  handlerPostulate({
                                    name: logged.name,
                                    url: logged.email,
                                    postId: data.id,
                                  })
                                }
                                disabled={
                                  postId.includes(data.id) ? true : false
                                }
                              >
                                {postId.includes(data.id)
                                  ? "Request sent"
                                  : "Apply"}
                              </Button>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })
                  ) : (
                    <h2>No posts available</h2>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </div>
  );
}
