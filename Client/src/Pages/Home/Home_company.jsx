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
  getAllProducts
} from "../../Redux/Actions/Actions";
import { Button, Card } from "react-bootstrap";
import style from "./homeCompany.module.css";
import PostForm from "./postForm";
import ListPostulates from "./listPostulates";

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
    }
    );
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
        alert("job offer successsfully deleted");
        dispatch(getAllPostsFromCompany(company.id));
      } else {
        alert("the operation could not be carried out, please try again");
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
            <img src={company?.image} alt="image company" />
          </div>
          <div className={style.infoCompany}>
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
          <Button variant="success" onClick={() => setShowFormPost(true)}>
            Create Post
          </Button>
          {showFormPost && (
            <Button
              variant="danger"
              className={style.buttonCancel}
              onClick={showForm}
            >
              Cancel
            </Button>
          )}
        </div>
        <div className={style.infoPost}>
          {posts?.map((data, index) => {
            return (
              <div className={style.cardPost} key={index}>
                <button
                  variant="danger"
                  style={{ position: "absolute", zIndex: "2", right: "10px" }}
                  onClick={() => handlerDelete(data.id)}
                >
                  X
                </button>
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
                      <span>postulates: {data.postulates.length}</span>
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
          <Button
            variant="danger"
            className={style.buttonCancel}
            onClick={() => setShowList(false)}
          >
            Back
          </Button>
          <ListPostulates props={listPostulates} />
        </>
      )}
    </div>
  );
}
