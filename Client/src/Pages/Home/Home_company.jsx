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
} from "../../Redux/Actions/Actions";
import { Card } from "react-bootstrap";
import style from "./homeCompany.module.css";
import PostForm from "./postForm";
import ListPostulates from "./listPostulates";
import Image from "../Users/perfilPicture.png";
import styled from "styled-components";

export default function HomeCompany() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const companies = [...selector.companies];
  const allTechnologies = [...selector.technologies];

  const posts = [...selector.companyPosts];
  const company = useSelector((state) => state.myCompany);
  const [showFormPost, setShowFormPost] = useState(false);
  const [showList, setShowList] = useState(false);
  const [listPostulates, setListPostulates] = useState(null);

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllPost());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (company) {
      dispatch(getAllPostsFromCompany(company.id));
    }
    getAllProducts("empresa").then((res) => {
      dispatch(res);
    });
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
        alert("Job offer successsfully deleted");
        dispatch(getAllPostsFromCompany(company.id));
      } else {
        alert("The operation could not be carried out, please try again");
      }
    });
  };

  return (
    <div className={style.containerCompany}>
      <Navbar />
      {showFormPost && <PostForm props={company.id} />}
      <div className={style.containerInfo}>
        <div className={style.infoCompany}>
          <h2>Company</h2>
          <div className={style.imageCompany}>
            <img src={company?.image} alt={Image} />
          </div>
          <div>
            <p>
              <strong>Name:</strong> {company?.name}
            </p>
            <p>
              <strong>Email:</strong> {company?.email}
            </p>
            <p>
              <strong>Address:</strong> {company?.address}
            </p>
          </div>
          <Button onClick={() => setShowFormPost(true)}>
            Create Post
          </Button>
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
          {posts?.map((data, index) => {
            return (
              <div className={style.cardPost} key={index}>
                <Button
                  variant="danger"
                  style={{ position: "absolute", zIndex: "2", right: "10px" }}
                  onClick={() => handlerDelete(data.id)}
                >
                  X
                </Button>
                <Card onClick={() => handlerList(data.postulates)}>
                  <Card.Header as="h6">{data.titlePost}</Card.Header>
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
      </div>

      {showList && (
        <>
          <ButtonCanceled
            variant="danger"
            // className={style.buttonCancel}
            onClick={() => setShowList(false)}
          >
            Back
          </ButtonCanceled>
          <ListPostulates props={listPostulates} />
        </>
      )}
    </div>
  );
}

const Button = styled.button`
  background-color: #1c5d99;
  border-radius: 5px;
  color: white;
  padding: 7px 10px 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
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
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;
  position: fixed;
  z-index: 4;
  top: 15px;
  right:20px;
  &:hover {
    color: white;
    background-color: #1c5d99;
  }
`;