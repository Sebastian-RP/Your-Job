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
  getUserByEmail,
  getAllProducts,
  deleteUser,
  getAllUsers,
  deleteCompany,
  deletePost,
  deleteTech,
  addTechnology,
  updateUser,
  getAllReports,
  getAllForumPost,
  deleteReport,
  deleteForumPost,
} from "../../Redux/Actions/Actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../../Components/Post/Post";
import emailjs from "@emailjs/browser";

// const Modality = ["remoto", "presencial"];
// const Experience = ["trainig", "junior", "semi-senior", "senior"];
// const salario = ["min-salary", "max-salary"];

export default function HomeAdmin() {
  const { user } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const [postId, setPostId] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const allTechnologies = [...selector.technologies];
  const companies = [...selector.companies];
  const users = [...selector.users];
  const posts = [...selector.posts];
  const forumPosts = [...selector.allForumPost];
  const reports = useSelector((state) => state.reports);
  const [toBan, setToBan] = useState(false);
  const [reportId, setReportId] = useState(false);
  const [showTechForm, setShowTechForm] = useState(false);
  const [techName, setTechName] = useState("");
  const [showInfo, setShowInfo] = useState({});
  const [adminView, setAdminView] = useState("user");
  const [reportView, setReportView] = useState("users");
  const [postView, setPostView] = useState("user");
  const logged = useSelector((state) => state.myUser);
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const postulatesUser = selector.postulatesUser;

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
    dispatch(getAllTechnologies());
    dispatch(getAllForumPost());
    dispatch(getAllReports());
    getAllUsers().then((data) => dispatch(data));
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, [dispatch, toBan]);

  useEffect(() => {
    dispatch(getAllReports());
  }, [reportView, adminView]);

  useEffect(() => {
    dispatch(getUserByEmail(user?.email));

    // eslint-disable-next-line
  }, [user]);

  // el useState llamado NUM y este useEffect hacen que la sugerencia de las
  //empresas no sean la mismas siempre.
  // y setea los posts en un estado local para hacer los filtros desde acá

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

  const sendMessage = async (username) => {
    try {
      const res = await axios.get(`/users/` + username);
      let conversation = { senderId: logged.id, receiverId: res.data.id };
      await axios.post("/conversation/", conversation);
      navigate("/messenger");
    } catch (error) {
      console.error(error);
    }
  };

  const banQuestion = (user, report = false) => {
    setToBan(user);
    setReportId(report);
  };

  const setAdmin = (user) => {
    dispatch(updateUser(user.id, { Account: "Admin" }));
    swal({
      title: "Administrator Added!",
      text: `${user.name} has been added to the admin team`,
      icon: "success",
    });
    setTimeout(() => {
      getAllUsers().then((data) => dispatch(data));
    }, 1500);
  };

  const removeAdmin = (user) => {
    dispatch(updateUser(user.id, { Account: "User" }));
    swal({
      title: "Administrator Removed!",
      text: `${user.name} has been removed from the admin team`,
      icon: "success",
    });
    setTimeout(() => {
      getAllUsers().then((data) => dispatch(data));
    }, 1500);
  };

  const handleChangeTech = (e) => {
    setTechName(e.target.value);
  };

  const handleAddTech = () => {
    setShowTechForm(false);
    dispatch(addTechnology(techName)).then((response) => {
      if (response.data.created) {
        swal({
          title: "Technology Added!",
          text: `${techName} has been added successfully`,
          icon: "success",
        });
      } else {
        if (response.data.active) {
          swal({
            title: "Technology already exists",
            text: `${techName} has not been added because it already exists`,
            icon: "warning",
          });
        } else {
          swal({
            title: "Technology Added!",
            text: `${techName} has been added successfully`,
            icon: "success",
          });
        }
      }
    });
    return setTimeout(() => {
      dispatch(getAllTechnologies());
    }, 1000);
  };

  const sendEmail = () => {
    emailjs
      .send("service_db1lpkd", "template_upt9d5c", toSend, "F-jlerFc9kQmnHiSA")
      .then((response) => {
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  const ban = (veredict) => {
    if (veredict) {
      dispatch(deleteReport(reportId));
      if (toBan.modality) {
        dispatch(deletePost(toBan.id)).then((data) => {
          setToSend({
            from_name: toBan.company.name,
            reply_to: toBan.company.email,
            message:
              "Dear Company, your post has been deleted for violating our Terms of Service.",
          });
          sendEmail();
        });
        swal({
          title: "Post deleted",
          text: `${toBan.company.name}'s post has been deleted successfully`,
          icon: "success",
        });
        return setTimeout(() => {
          setToBan(false);
          setReportId(false);
        }, 1000);
      }
      if (toBan.CommentForumPosts) {
        dispatch(deleteForumPost(toBan.id)).then((data) => {
          setToSend({
            from_name: toBan.company.name,
            reply_to: toBan.company.email,
            message:
              "Dear User, your post has been deleted for violating our Terms of Service.",
          });
          sendEmail();
        });
        swal({
          title: "Post deleted",
          text: `${toBan.user}'s post has been deleted successfully`,
          icon: "success",
        });
        return setTimeout(() => {
          setToBan(false);
          setReportId(false);
        }, 1000);
      }
      if (toBan.property && toBan.property === "Technology") {
        dispatch(deleteTech(toBan.id));

        swal({
          title: "Technology deleted",
          text: `${toBan.name} has been deleted successfully`,
          icon: "success",
        });

        return setTimeout(() => {
          setToBan(false);
          setReportId(false);
        }, 1000);
      }
      if (toBan.Account && toBan.Account === "User")
        dispatch(deleteUser(toBan.id)).then((data) => {
          setToSend({
            from_name: toBan.name,
            reply_to: toBan.email,
            message:
              "Dear User, your account has been banned for violating our Terms of Service.",
          });
          sendEmail();
        });
      if (toBan.Account && toBan.Account === "Company")
        dispatch(deleteCompany(toBan.id)).then((data) => {
          let toDelete = posts.filter((post) => post.company.id == toBan.id);
          for (let post of toDelete) {
            dispatch(deletePost(post.id));
          }
          setToSend({
            from_name: toBan.name,
            reply_to: toBan.email,
            message:
              "Dear Company, your account has been banned for violating our Terms of Service.",
          });
          sendEmail();
        });
      if (
        toBan.Account &&
        (toBan.Account === "Admin" || toBan.Account === "SuperAdmin")
      )
        return swal({
          title: "Action not Permitted",
          text: `${toBan.name} cannot be banned, as they are an Admin`,
          icon: "warning",
        });
      swal({
        title: "Account deleted",
        text: `${toBan.name} has been deleted successfully`,
        icon: "success",
      });
      setTimeout(() => {
        setToBan(false);
        setReportId(false);
      }, 1000);
    } else {
      setToBan(false);
      setReportId(false);
    }
  };

  return (
    <div className={style.containerHome}>
      <>
        <Navbar />
        {showPage ? (
          <>
            {toBan && (
              <div className={style.confirmBan}>
                <div>
                  {toBan.Account &&
                  (toBan.Account === "User" || toBan.Account === "Company")
                    ? `Are you sure you want to ban ${toBan.name}?`
                    : toBan.modality || toBan.CommentForumPosts
                    ? `Are you sure you want to delete ${
                        toBan.modality ? toBan.company.name : toBan.user
                      }'s post?`
                    : `Are you sure you want to delete ${toBan.name}?`}
                </div>
                <div className={style.confirmButtons}>
                  <Button onClick={() => ban(false)}>No</Button>{" "}
                  <Button variant="danger" onClick={() => ban(true)}>
                    Yes
                  </Button>
                </div>
              </div>
            )}
            {showTechForm && (
              <div className={style.confirmBan} onClick={() => {}}>
                <div>Please enter the name of the Technology</div>
                <input type="text" onChange={(e) => handleChangeTech(e)} />
                <Button
                  onClick={() => {
                    handleAddTech();
                  }}
                >
                  Submit
                </Button>
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
                </div>
                <ButtonGroup vertical>
                  <Button
                    variant={adminView === "user" ? "dark" : "light"}
                    onClick={() => {
                      setAdminView("user");
                    }}
                  >
                    Users
                  </Button>
                  <Button
                    variant={adminView === "company" ? "dark" : "light"}
                    onClick={() => {
                      setAdminView("company");
                    }}
                  >
                    Companies
                  </Button>
                  <Button
                    variant={adminView === "posts" ? "dark" : "light"}
                    onClick={() => {
                      setAdminView("posts");
                    }}
                  >
                    Posts
                  </Button>
                  <Button
                    variant={adminView === "technology" ? "dark" : "light"}
                    onClick={() => {
                      setAdminView("technology");
                    }}
                  >
                    Technologies
                  </Button>
                  <Button
                    variant={adminView === "reports" ? "dark" : "light"}
                    onClick={() => {
                      setAdminView("reports");
                    }}
                  >
                    Reports - {reports ? reports.flat().length : "?"}
                  </Button>
                  {logged.Account === "SuperAdmin" && (
                    <Button
                      variant={adminView === "admin" ? "dark" : "light"}
                      onClick={() => {
                        setAdminView("admin");
                      }}
                    >
                      Admins
                    </Button>
                  )}
                </ButtonGroup>
              </div>
              <div className={style.infoPost}>
                <div className={style.columnInfoRight}>
                  <h3>Admin Dashboard</h3>
                  <>
                    <h4>{showInfo?.name}</h4>
                    <img src={showInfo?.image} alt="profile_picture" />
                    <p>Info: {showInfo?.description}</p>
                    <p>Email: {showInfo?.email}</p>
                    <p>Country: {showInfo?.nationality}</p>
                  </>
                  <div className={style.columInfo}></div>
                </div>
                {adminView === "user" && (
                  <div className={style.columnPost}>
                    {users.length ? (
                      users.map((user, index) => {
                        return (
                          <div
                            className={style.cardPost}
                            key={index}
                            onMouseOver={() => {
                              setShowInfo(user);
                            }}
                          >
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
                                  <Button
                                    onClick={() => sendMessage(user.name)}
                                  >
                                    Message
                                  </Button>
                                  <Button
                                    variant="danger"
                                    onClick={() => banQuestion(user)}
                                  >
                                    Ban
                                  </Button>
                                  {logged.Account === "SuperAdmin" &&
                                    user.Account === "User" && (
                                      <Button
                                        variant="success"
                                        onClick={() => {
                                          setAdmin(user);
                                        }}
                                      >
                                        Make Admin
                                      </Button>
                                    )}
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
                )}
                {adminView === "company" && (
                  <div className={style.columnPost}>
                    {companies.length ? (
                      companies.map((company, index) => {
                        return (
                          <div
                            className={style.cardPost}
                            key={index}
                            onMouseOver={() => {
                              setShowInfo(company);
                            }}
                          >
                            <Card>
                              <Card.Header as="h5">{company.name}</Card.Header>
                              <Card.Body>
                                <div className={style.userOptions}>
                                  <Button
                                    onClick={() =>
                                      navigate(`/company/${company.name}`)
                                    }
                                  >
                                    Profile
                                  </Button>
                                  <Button
                                    onClick={() => sendMessage(company.name)}
                                  >
                                    Message
                                  </Button>
                                  <Button
                                    variant="danger"
                                    onClick={() => banQuestion(company)}
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
                      <div>No companies available</div>
                    )}
                  </div>
                )}
                {adminView === "posts" && (
                  <div className={style.columnPost}>
                    <ButtonGroup>
                      <Button
                        onClick={() => {
                          setPostView("company");
                        }}
                      >
                        Company Posts
                      </Button>
                      <Button
                        onClick={() => {
                          setPostView("user");
                        }}
                      >
                        User Posts
                      </Button>
                    </ButtonGroup>
                    {postView === "company" &&
                      (posts.length ? (
                        posts.map((data, index) => {
                          return (
                            <div className={style.cardPost} key={index}>
                              <Card>
                                <Card.Header as="h5">
                                  <label>Job Offer</label> -{" "}
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
                                    <strong>Experience:</strong>{" "}
                                    {data.experience}
                                    <br />
                                    <strong>Min-Salary:</strong>{" "}
                                    {data.min_salary}
                                    <br />
                                    <strong>Max-Salary:</strong>{" "}
                                    {data.max_salary}
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
                                    variant="danger"
                                    onClick={() => {
                                      banQuestion(data);
                                    }}
                                  >
                                    Delete Post
                                  </Button>
                                </Card.Body>
                              </Card>
                            </div>
                          );
                        })
                      ) : (
                        <h2>No posts available</h2>
                      ))}
                    {postView === "user" &&
                      (forumPosts.length ? (
                        forumPosts.map((post, index) => {
                          return (
                            <>
                              <Post
                                key={post?.user + "_" + index}
                                data={post}
                              />
                              <ButtonGroup>
                                <Button
                                  variant="danger"
                                  onClick={() => {
                                    banQuestion(post);
                                  }}
                                >
                                  DeletePost
                                </Button>
                              </ButtonGroup>
                            </>
                          );
                        })
                      ) : (
                        <h2>No posts available</h2>
                      ))}
                  </div>
                )}
                {adminView === "technology" && (
                  <div className={style.columnPost}>
                    <Button onClick={() => setShowTechForm(true)}>
                      Add Technology
                    </Button>
                    {allTechnologies.length ? (
                      allTechnologies.map((tech, index) => {
                        return (
                          <div className={style.cardPost} key={index}>
                            <Card>
                              <Card.Header as="h5">{tech.name}</Card.Header>
                              <Card.Body>
                                <div className={style.userOptions}>
                                  <Button
                                    variant="danger"
                                    onClick={() => banQuestion(tech)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })
                    ) : (
                      <h2>No technologies available</h2>
                    )}
                  </div>
                )}
                {adminView === "admin" && (
                  <div className={style.columnPost}>
                    {users.length ? (
                      // eslint-disable-next-line
                      users.map((user, index) => {
                        if (user.Account !== "User")
                          return (
                            <div
                              className={style.cardPost}
                              key={index}
                              onMouseOver={() => {
                                setShowInfo(user);
                              }}
                            >
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
                                    <Button
                                      onClick={() => sendMessage(user.name)}
                                    >
                                      Message
                                    </Button>
                                    <Button
                                      variant="danger"
                                      onClick={() => banQuestion(user)}
                                    >
                                      Ban
                                    </Button>

                                    <Button
                                      variant="danger"
                                      onClick={() => {
                                        removeAdmin(user);
                                      }}
                                    >
                                      Remove Admin
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
                )}
                {adminView === "reports" && (
                  <div className={style.columnPost}>
                    <ButtonGroup>
                      <Button onClick={() => setReportView("users")}>
                        Users
                      </Button>
                      <Button onClick={() => setReportView("userposts")}>
                        UserPosts
                      </Button>
                      <Button onClick={() => setReportView("companies")}>
                        Companies
                      </Button>
                      <Button onClick={() => setReportView("companyposts")}>
                        CompanyPosts
                      </Button>
                    </ButtonGroup>
                    {reportView === "users" &&
                      (reports[0]?.length > 0 ? (
                        reports[0].map((report, index) => {
                          let user = users.find(
                            (user) => user.id == report.contentId
                          );
                          if (!user) {
                            dispatch(deleteReport(report.id));
                            return <div> Error </div>;
                          } else {
                            return (
                              <div
                                className={style.cardPost}
                                key={index}
                                onMouseOver={() => {
                                  setShowInfo(user);
                                }}
                              >
                                <Card>
                                  <Card.Header as="h5">
                                    {user?.name} - Report Count:{" "}
                                    {report.reportCount}
                                  </Card.Header>
                                  <Card.Body>
                                    <div className={style.userOptions}>
                                      <Button
                                        onClick={() =>
                                          navigate(`/users/${user.name}`)
                                        }
                                      >
                                        Profile
                                      </Button>
                                      <Button
                                        onClick={() => sendMessage(user.name)}
                                      >
                                        Message
                                      </Button>
                                      <Button
                                        variant="danger"
                                        onClick={() =>
                                          banQuestion(user, report.id)
                                        }
                                      >
                                        Ban
                                      </Button>
                                      Reasons:
                                      <ul>
                                        {Object.keys(report.reasons).map(
                                          (reason, index) => {
                                            // console.log(report.reasons[reason]);
                                            // console.log(reason);
                                            if (report.reasons[reason]) {
                                              return <li>{reason}</li>;
                                            }
                                          }
                                        )}
                                      </ul>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div>No Users Reported</div>
                      ))}
                    {reportView === "userposts" &&
                      (reports[1]?.length > 0 ? (
                        reports[1].map((report, index) => {
                          let post = forumPosts.find(
                            (post) => post.id == report.contentId
                          );
                          if (!post) {
                            // dispatch(deleteReport(report.id));
                            return <div> Error </div>;
                          } else if (post) {
                            return (
                              <>
                                <div>Report Count {report.reportCount}</div>
                                <Post
                                  key={post?.user + "_" + index}
                                  data={post}
                                />
                                <ButtonGroup>
                                  <Button
                                    variant="danger"
                                    onClick={() => {
                                      banQuestion(post, report.id);
                                    }}
                                  >
                                    DeletePost
                                  </Button>
                                </ButtonGroup>
                                Reasons:
                                <ul>
                                  {Object.keys(report.reasons).map(
                                    (reason, index) => {
                                      // console.log(report.reasons[reason]);
                                      // console.log(reason);
                                      if (report.reasons[reason]) {
                                        return <li>{reason}</li>;
                                      }
                                    }
                                  )}
                                </ul>
                              </>
                            );
                          } else {
                            return (
                              <div>
                                {" "}
                                Error getting post, please try again later{" "}
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div>No Forum Post Reports</div>
                      ))}
                    {reportView === "companies" &&
                      (reports[2]?.length > 0 ? (
                        reports[2].map((report, index) => {
                          let company = companies.find(
                            (comp) => comp.id == report.contentId
                          );
                          if (!company) {
                            dispatch(deleteReport(report.id));
                            return <div> Error </div>;
                          } else {
                            return (
                              <div
                                className={style.cardPost}
                                key={index}
                                onMouseOver={() => {
                                  setShowInfo(company);
                                }}
                              >
                                <Card>
                                  <Card.Header as="h5">
                                    {company?.name} - Report Count:{" "}
                                    {report.reportCount}
                                  </Card.Header>
                                  <Card.Body>
                                    <div className={style.userOptions}>
                                      <Button
                                        onClick={() =>
                                          navigate(`/users/${company?.name}`)
                                        }
                                      >
                                        Profile
                                      </Button>
                                      <Button
                                        onClick={() =>
                                          sendMessage(company?.name)
                                        }
                                      >
                                        Message
                                      </Button>
                                      <Button
                                        variant="danger"
                                        onClick={() =>
                                          banQuestion(company, report.id)
                                        }
                                      >
                                        Ban
                                      </Button>
                                    </div>
                                    Reasons:
                                    <ul>
                                      {Object.keys(report.reasons).map(
                                        (reason, index) => {
                                          // console.log(report.reasons[reason]);
                                          // console.log(reason);
                                          if (report.reasons[reason]) {
                                            return <li>{reason}</li>;
                                          }
                                        }
                                      )}
                                    </ul>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div>No Companies Reported</div>
                      ))}
                    {reportView === "companyposts" &&
                      (reports[3]?.length > 0 ? (
                        reports[3].map((report, index) => {
                          let data = posts.find(
                            (companyPosts) =>
                              companyPosts.id == report.contentId
                          );
                          if (!data) {
                            dispatch(deleteReport(report.id));
                            return <div> Error </div>;
                          } else {
                            return (
                              <div className={style.cardPost} key={index}>
                                <Card>
                                  <Card.Header as="h5">
                                    <label>Job Offer</label> -{" "}
                                    <label
                                      className={style.companyName}
                                      onClick={() => {
                                        navigate(
                                          `/users/${data.company?.name}`
                                        );
                                      }}
                                    >
                                      {" "}
                                      {data.company?.name}
                                    </label>
                                    -
                                    <label>
                                      {" "}
                                      Report Count: {report.reportCount}{" "}
                                    </label>
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title>{data.TitlePost}</Card.Title>
                                    <Card.Text style={{ textAlign: "start" }}>
                                      {data.descripcion}
                                      <br />
                                      <strong>Experience:</strong>{" "}
                                      {data.experience}
                                      <br />
                                      <strong>Min-Salary:</strong>{" "}
                                      {data.min_salary}
                                      <br />
                                      <strong>Max-Salary:</strong>{" "}
                                      {data.max_salary}
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
                                      variant="danger"
                                      onClick={() => {
                                        banQuestion(data, report.id);
                                      }}
                                    >
                                      Delete Post
                                    </Button>
                                    <br />
                                    Reasons:
                                    <ul>
                                      {Object.keys(report.reasons).map(
                                        (reason, index) => {
                                          // console.log(report.reasons[reason]);
                                          // console.log(reason);
                                          if (report.reasons[reason]) {
                                            return <li>{reason}</li>;
                                          }
                                        }
                                      )}
                                    </ul>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          }
                        })
                      ) : (
                        <div>No Company Posts Reported</div>
                      ))}
                  </div>
                )}
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
