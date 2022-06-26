import Navbar from "../../Components/NavBar/NavBar";
import Loading from "../../Components/Loading/Loading"
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
  getAllProducts,
  getActivePlans,
  updatePremiumPlan,
} from "../../Redux/Actions/Actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const profileDefaultImage =
  "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";

const Modality = ["Remote", "Presential"];
const Experience = ["Training", "Junior", "Semi-Senior", "Senior"];
const salario = ["min-salary", "max-salary"];

export default function HomeUser() {
  const { user, isAuthenticated, loginWithPopup } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const [posts, setPosts] = useState([]);
  const [num, setNum] = useState(null);
  const [postId, setPostId] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const allTechnologies = [...selector.technologies];
  const companies = [...selector.companies].filter(data => data.premium === 2);
  const logged = useSelector((state) => state.myUser);
  const suggestions = companies.slice(num, num + 2);
  const postulatesUser = selector.postulatesUser;
  const [filterMod, setFilterMod] = useState([]);
  const [mode, setMode] = useState("");
  const [filterExp, setFilterExp] = useState([]);
  const [modeExp, setModeExp] = useState("");

  // console.log(companies);
  // console.log(suggestions);
  // console.log(num);
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
    dispatch(getAllTechnologies());
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    // console.log(selector);
    // console.log(user?.email);
    // console.log(logged);
    dispatch(getUserByEmail(user?.email));
    getAllProducts("usuario").then((res) => {
      dispatch(res);
    });
    dispatch(getActivePlans(user));
    // eslint-disable-next-line
  }, [user]);

  // el useState llamado NUM y este useEffect hacen que la sugerencia de las
  //empresas no sean la mismas siempre.
  // y setea los posts en un estado local para hacer los filtros desde acá
  useEffect(() => {
    setPosts(selector.posts);
    setNum(Math.floor(Math.random() * (companies.length - 3)));
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
    setShowPage(true);
  }, []);

  const getFilterByTechnologies = (id) => {
    // console.log(id);
    setPosts(posts.filter((data) => data.technologiesId.includes(id)));
  };
  const filterByCompany = (name) => {
    setPosts(selector.posts.filter((data) => data.company.name === name));
  };
  const [dataRep, setDataRep] = useState([]);
  const filterByModality = (data) => {
    if (mode !== data) {
      if (
        !filterMod.length &&
        selector.posts.length !== posts.length &&
        mode !== ""
      ) {
        setPosts(dataRep.filter((d) => d.modality === data));
        setFilterMod([...dataRep]);
      } else if (!filterMod.length) {
        setFilterMod([...posts]);
        setPosts(posts.filter((d) => d.modality === data));
      } else if (filterMod.length) {
        setPosts(filterMod.filter((d) => d.modality === data));
        setDataRep([...filterMod]);
        setFilterMod([]);
      }
      setMode(data);
    }
  };
  const [dataRepExp, setDataRepExp] = useState([]);
  const filterByExperience = (data) => {
    if (modeExp !== data) {
      if (
        !filterExp.length &&
        selector.posts.length !== posts.length &&
        modeExp !== ""
      ) {
        setPosts(dataRepExp.filter((d) => d.experience === data));
        setFilterExp([...dataRepExp]);
      } else if (!filterExp.length) {
        setFilterExp([...posts]);
        setPosts(posts.filter((d) => d.experience === data));
      } else if (filterExp.length) {
        setPosts(filterExp.filter((d) => d.experience === data));
        setDataRepExp([...filterExp]);
        setFilterExp([]);
      }
      setModeExp(data);
    }
  };

  const filterBySalary = (data) => {
    const salary = posts;
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
    }
    setPosts([...salary]);
  };
  const handlerPostulate = (val) => {
    if (!isAuthenticated) {
      return swal({
        title: "Oops!",
        text: "You need to bo logged in to Apply for jobs",
        icon: "error",
        buttons:true
      }).then((data) => {
        if(data) navigate("/login");
      });
    }
    const { name, url, postId, companyId } = val;
    dispatch(postulateJob({ name, url, postId, companyId }))
      .then((res) => swal("Listo!", res.data, "success"))
      .then(() => dispatch(getPostulates(user.email)));
  };

  const dataFilter = (data, searchMode) => {
    let lengthdata = posts?.reduce((acc, item) => {
      if (item[searchMode] === data) {
        acc.push(item);
      }
      return acc;
    }, []);
    return lengthdata;
  };
  const dataFilterByTechnology = (data) => {
    let lengthData = posts?.reduce((acc, item) => {
      if (item.technologiesId.includes(data)) {
        acc.push(item);
      }
      return acc;
    }, []);
    return lengthData;
  };

  return (
    <div className={style.containerHome}>
      <>
        <Navbar home={true} />
        {showPage ? (
          <>
            <div className={style.containerActions}>
              <div className={style.filters}>
                <div className={style.image}>
                  <img
                    src={
                      logged?.image
                        ? logged.image + "-/resize/200x200/"
                        : profileDefaultImage
                    }
                    alt="profile_picture"
                    width={"200px"}
                    height={"200px"}
                  />
                  <p>Welcome {logged.error ? "Guest" : logged.name}!</p>
                  {posts !== selector.posts && (
                    <Button
                      variant="success"
                      onClick={() => {
                        setModeExp("");
                        setMode("");
                        setPosts(selector.posts);
                      }}
                    >
                      Clear Filter
                    </Button>
                  )}
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
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
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Technologies</Accordion.Header>
                    {allTechnologies?.map((d, i) => {
                      return (
                        <Accordion.Body
                          style={{ padding: "5px", cursor: "pointer" }}
                          key={i}
                          onClick={() => getFilterByTechnologies(d.id)}
                        >
                          <p className={style.lengthDat}>
                            {d.name}
                            <strong>
                              {dataFilterByTechnology(d.id).length}
                            </strong>
                          </p>
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
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
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Modality</Accordion.Header>
                    {Modality.map((data, index) => {
                      return (
                        <Accordion.Body
                          key={index}
                          onClick={() => filterByModality(data)}
                          style={{ cursor: "pointer" }}
                        >
                          <p className={style.lengthDat}>
                            {" "}
                            {data}
                            <strong>
                              {dataFilter(data, "modality").length}
                            </strong>
                          </p>
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
                          <p className={style.lengthDat}>
                            {data}
                            <strong>
                              {dataFilter(data, "experience").length}
                            </strong>
                          </p>
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
                        <div
                          className={
                            data.company.premium === 1
                              ? style.cardPostPremium
                              : style.cardPost
                          }
                          key={index}
                        >
                          <Card>
                            <Card.Header as="h5">
                              <label>Job Offer</label> -{" "}
                              <label
                                className={style.companyName}
                                onClick={() => {
                                  navigate(`/company/${data.company?.name}`);
                                }}
                              >
                                {" "}
                                {data.company?.name}{" "}
                                {data.company.premium === 1 ? (
                                  <AiFillStar />
                                ) : (
                                  ""
                                )}
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
                                      (t) => t.id == data,
                                    );
                                    return <li key={i}>{tech?.name}</li>;
                                  })}
                                </>
                              </Card.Text>
                              <button
                                className={style.Button}
                                variant={
                                  postId.includes(data.id)
                                    ? "secondary"
                                    : "primary"
                                }
                                onClick={() => {
                                  handlerPostulate({
                                    name: logged.name,
                                    url: logged.email,
                                    postId: data.id,
                                    companyId: data.companyId,
                                  });
                                }}
                                disabled={
                                  postId.includes(data.id) ? true : false
                                }
                              >
                                {postId.includes(data.id)
                                  ? "Request sent"
                                  : "Apply"}
                              </button>
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
          <Loading />
        )}
      </>
    </div>
  );
}
