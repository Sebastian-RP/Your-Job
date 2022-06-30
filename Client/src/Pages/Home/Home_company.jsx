import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar/NavBar";
import {
  deletePost,
  getAllCompanies,
  getAllPost,
  getAllPostsFromCompany,
  getAllProducts,
  getActivePlans,
  updatePremiumPlanCompany,
} from "../../Redux/Actions/Actions";
import { Card } from "react-bootstrap";
import style from "./homeCompany.module.css";
import PostForm from "./postForm";
import ListPostulates from "./listPostulates";
import styled from "styled-components";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function HomeCompany() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  const usersPremium = [...selector.users].filter(
    (data) => data.premium === 1 || data.premium === 3,
  );
  const suggestions = usersPremium.slice(num, num + 3);
  const allTechnologies = [...selector.technologies];
  const posts = [...selector.companyPosts];
  const company = useSelector((state) => state.myCompany);
  const plans = useSelector((state) => state.activePlans);
  const [showFormPost, setShowFormPost] = useState(false);
  const [showList, setShowList] = useState(false);
  const [listPostulates, setListPostulates] = useState(null);
  const profileDefaultImage =
  "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    !num && setNum(Math.floor(Math.random() * (usersPremium.length - 3)));
    // eslint-disable-next-line
  }, [selector]);


  useEffect(() => {
    if (company) {
      dispatch(getAllPostsFromCompany(company.id));
    }
    dispatch(getAllProducts("empresa"));
    updatePremiumPlanCompany(user?.email, plans).then((res) => {
      dispatch(res);
    });
    dispatch(getActivePlans(user));
    // eslint-disable-next-line
  }, [company]);

  const handlerList = (data) => {
    setListPostulates(data);
    setShowList(true);
  };

  const showForm = () => {
    setShowFormPost(false);
    dispatch(getAllPostsFromCompany(company.id));
  };
  const handlerDelete = (value) => {
    dispatch(deletePost(value)).then((data) => {
      if (data.status === 200) {
        swal({
          title: "Post deleted",
          text: "The post has been successfully deleted",
          icon: "success",
        });
        dispatch(getAllPostsFromCompany(company.id));
      } else {
        swal({
          title: "Error",
          text: `Sorry something seems to have gone wrong, please try again later`,
          icon: "error",
        });
      }
    });
  };

  return (
    <div className={style.containerCompany}>
      <Navbar />
      {showFormPost && <PostForm props={company.id} />}
      <div className={style.containerInfo}>
        <div className={style.infoCompany}>
          <div className={style.imageCompany}>
            <img
              src={
                company?.image
                  ? company.image + "-/resize/200x200/"
                  : profileDefaultImage
              }
              alt="profile_picture"
              width={"200px"}
              height={"200px"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                profileDefaultImage;
              }}
            />         
            <h1>Welcome{"  "}{company?.name}</h1> 
          </div>
          <div>
            <p>
              <strong>Email:</strong> {company?.email}
            </p>
            <p>
              <strong>Address:</strong> {company?.address}
            </p>
          </div>
          <Button onClick={() => setShowFormPost(true)} style={{ padding: "7px 10px 7px 10px" }}>Create Post</Button>
          {showFormPost && (
            <ButtonCanceled
              // className={style.buttonCancel}
              onClick={showForm}
            >
              Cancel
            </ButtonCanceled>
          )}
        </div>

        <div className={style.infoPost}>
          <h1>Your Posts</h1>
          {posts?.map((data, index) => {
            return (
              <div className={style.cardPost} key={index}>
                <Button
                  variant="danger"
                  style={{ position: "absolute", zIndex: "2", right: "10px", top: "4px" }}
                  onClick={() => handlerDelete(data.id)}
                >
                  X
                </Button>
                <Card onClick={() => handlerList(data.postulates)} style={{ zIndex: "1" }}>
                  <Card.Header as="h6">{data.titlePost}
                  </Card.Header>
                  <Card.Body>
                    {/* <Card.Title>{data.TitlePost}</Card.Title> */}
                    <Card.Text
                      style={{ textAlign: "start" }}
                      className={style.info}
                    >
                      <span>
                        <strong>Experience:</strong> {data.experience}
                      </span>
                      <br />
                      <span>
                        <strong>Modality:</strong> {data.modality}
                      </span>
                      <br />
                      <>
                        <strong>Technologies:</strong>

                        {data.technologiesId.map((data, i) => {
                          let tech = allTechnologies.find(
                            // eslint-disable-next-line
                            (t) => t.id == data
                          );

                          return <li key={i}>{tech ? tech.name : data}</li>;
                        })}
                      </>
                    </Card.Text>
                    <div className={style.infoCard}>
                      <span>Postulates: {data.postulates.length}</span>
                      <span>Created: {data.createdAt.slice(0, 10)}</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
        <div className={style.columnInfoRight}>
          <h1>Suggestions</h1>
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
                    `/users/${data.name}`
                  );
                }}
              >
                <Card.Header>
                  <strong>Email:</strong> {data.email}
                  <br />
                  <strong>Technologies: </strong> {data.technologiesName.map(A => {
                    if (A !== data.technologiesName[data.technologiesName.length - 1]) return `${A}, `;
                    return `${A}.`
                  })}
                </Card.Header>
                <Card.Body>
                  <Card.Title> {data.name} </Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        </div>
      </div>

      {showList && (
        <>
          <ButtonCanceled
            variant="danger"
            onClick={() => setShowList(false)}
          >
            Back
          </ButtonCanceled>
          <ListPostulates props={[listPostulates, setShowList, company]} />
        </>
      )}
    </div>
  );
}

export const Button = styled.button`
  background-color: #1c5d99;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
  `;

const ButtonCanceled = styled.button`
  background-color: white;
  border-radius: 5px;
  color: #222222;
  padding: 7px 10px 7px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  transition: all 300ms;
  position: fixed;
  z-index: 4;
  top: 55px;
  right: 0px;
  &:hover {
    color: white;
    background-color: #1c5d99;
  }
`;
