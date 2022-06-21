import Navbar from "../../Components/NavBar/NavBar";
import style from "./home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Card, Button } from "react-bootstrap";
import swal from "sweetalert";
import {
  getAllCompanies,
  getAllPost,
  getAllTechnologies,
  getPostulates,
  getUserByEmail,
  postulateJob,
  getAllProducts,
  deleteUser,
  getAllUsers,
} from "../../Redux/Actions/Actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../Users/perfilPicture.png";
import axios from "axios";

// const Modality = ["remoto", "presencial"];
// const Experience = ["trainig", "junior", "semi-senior", "senior"];
// const salario = ["min-salary", "max-salary"];

export default function HomeAdmin() {
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
  const users = [...selector.users];
  const [toBan, setToBan] = useState(false);
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
    getAllProducts("usuario").then((res) => {
      dispatch(res);
    });
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

  // const getFilterByTechnologies = (id) => {
  //   console.log(id);
  //   setPosts(posts.filter((data) => data.technologiesId.includes(id)));
  // };
  // const filterByCompany = (name) => {
  //   setPosts(posts.filter((data) => data.company.name === name));
  // };
  // const filterByModality = (data) => {
  //   setPosts(posts.filter((d) => d.modality === data));
  // };
  // const filterByExperience = (data) => {
  //   setPosts(posts.filter((d) => d.experience === data));
  // };
  // const filterBySalary = (data) => {
  //   const salary = selector.posts;
  //   if (data === "min-salary") {
  //     for (let i = 0; i < salary.length - 1; i++) {
  //       for (let j = i + 1; j < salary.length; j++) {
  //         if (salary[j].max_salary < salary[i].max_salary) {
  //           let current = salary[i];
  //           salary[i] = salary[j];
  //           salary[j] = current;
  //         }
  //       }
  //     }
  //     setPosts([...salary]);
  //   } else {
  //     for (let i = 0; i < salary.length - 1; i++) {
  //       for (let j = i + 1; j < salary.length; j++) {
  //         if (salary[j].max_salary > salary[i].max_salary) {
  //           let current = salary[i];
  //           salary[i] = salary[j];
  //           salary[j] = current;
  //         }
  //       }
  //     }
  //     setPosts([...salary]);
  //   }
  // };
  // const handlerPostulate = (val) => {
  //   if (!isAuthenticated) {
  //     return loginWithPopup();
  //   } else {
  //     if (logged.error) {
  //       return swal({
  //         title: "Oops!",
  //         text: "It seems like you haven't finished your profile, click Ok to finish it!",
  //         icon: "error",
  //       }).then(() => {
  //         navigate("/onboarding");
  //       });
  //     }
  //   }
  //   const { name, url, postId } = val;

  //   dispatch(postulateJob({ name, url, postId }))
  //     .then((res) => swal("Listo!", res.data, "success"))
  //     .then(() => dispatch(getPostulates(user.email)));
  // };

  const sendMessage = async (username) => {
    try {
      const res = await axios.get(`/users/` + username);
      let conversation = { senderId: logged.id, receiverId: res.data.id };
      await axios.post("/conversation/", conversation);
      navigate("/messenger");
    } catch (error) {
      console.log(error);
    }
  };

  const banQuestion = (user) => {
    setToBan(user);
  };

  const ban = (veredict) => {
    if (veredict) {
      dispatch(deleteUser(toBan.id));
      swal({
        title: "User deleted",
        text: `${toBan.name} has been deleted successfully`,
        icon: "success",
      });
      getAllUsers().then((data) => dispatch(data));
    }
    setToBan(false);
  };

  return (
    <div className={style.containerHome}>
      <>
        <Navbar />
        {showPage ? (
          <>
            {toBan && (
              <div className={style.confirmBan}>
                <div>Are you sure you want to ban {toBan.name}?</div>
                <div className={style.confirmButtons}>
                  <Button onClick={() => ban(false)}>No</Button>{" "}
                  <Button variant="danger" onClick={() => ban(true)}>
                    Yes
                  </Button>
                </div>
              </div>
            )}
            <div className={style.containerActions}>
              <div className={style.filters}>
                <div className={style.image}>
                  <img
                    src={logged?.image + "-/resize/200x200/"}
                    alt="profile_picture"
                  />
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
                <ButtonGroup vertical>
                  <Button variant="light">Users</Button>
                  <Button variant="light">Companies</Button>
                  <Button variant="light">Posts</Button>
                  <Button variant="light">Technologies</Button>
                </ButtonGroup>
              </div>
              <div className={style.infoPost}>
                <div className={style.columnInfoRight}>
                  <h3>Admin</h3>
                  <>
                    {/* {suggestions.map((data, index) => (
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
                    ))} */}
                  </>
                  <div className={style.columInfo}></div>
                </div>
                <div className={style.columnPost}>
                  {users.length ? (
                    users.map((user, index) => {
                      return (
                        <div className={style.cardPost} key={index}>
                          <Card>
                            <Card.Header as="h5">{user.name}</Card.Header>
                            <Card.Body>
                              <div className={style.userOptions}>
                                <Button
                                  onClick={() =>
                                    navigate(`/users/${user.name}`)
                                  }
                                >
                                  Profile
                                </Button>
                                <Button onClick={() => sendMessage(user.name)}>
                                  Message
                                </Button>
                                <Button
                                  variant="danger"
                                  onClick={() => banQuestion(user)}
                                >
                                  Ban
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })
                  ) : (
                    <h2>No Users Available</h2>
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
