import Navbar from "../../../Components/NavBar/NavBar.jsx";
import style from "./HomeUser.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCompanies,
  getAllPost,
  getAllTechnologies,
  getPostulates,
  getUserByEmail,
  postulateJob,
  getAllProducts,
} from "../../../Redux/Actions/Actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const Modality = ["remoto", "presencial"];
// const Experience = ["trainig", "junior", "semi-senior", "senior"];
// const salario = ["min-salary", "max-salary"];

export default function HomeUser() {
  const { isLoading, user, isAuthenticated, loginWithPopup } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { posts, technologies } = state;
  const [techsFiltered, setTechsFiltered] = useState([]);
  const [filter, setFilter] = useState({
    technology: "all",
    experience: "all",
    modality: "all",
    minSalary: 0,
    maxSalary: Math.max(...posts.map((post) => post.max_salary)),
    contract: "all",
  });
  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllCompanies());
    dispatch(getAllTechnologies());
    dispatch(getUserByEmail(user?.email));
    // eslint-disable-next-line
  }, []);
  return (
    <div className={style.container}>
      <Navbar />
      <main className={style.main}>
        {isLoading ? (
          <img src="https://ucarecdn.com/eeaa3fc1-0bea-4ed1-97e5-f78b1f2aac76/" width={"100px"} />
        ) : (
          <>
            <aside className={style.aside}>
              <div className={style.profile}>
                <img className={style.profile__image} src={user.picture} alt="" />
                <h3>{user.name}</h3>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                <h3>Menu</h3>
                <h3>Filter</h3>
                <h3>Friends</h3>
              </div>
              <hr />
              <form
                className={style.filter__container}
                onSubmit={(e) => {
                  submitHandler(e);
                }}
              >
                <h5>Tecnologies</h5>
                <div className={style.filter__technologies}>
                  <select
                    name="technology"
                    id=""
                    value={filter.technology}
                    onChange={(e) => filterHandler(e, filter, setFilter)}
                    className={`${style.selector} ${style.selector__technologies}`}
                  >
                    <option value={"all"}>Select a tech</option>;
                    {technologies
                      .filter((tech) => !techsFiltered.includes(tech.name))
                      .map((technology, index) => {
                        return (
                          <option key={`${technology}_${index}`} value={technology.name}>
                            {technology.name}
                          </option>
                        );
                      })}
                  </select>
                  <input type="button" value={"Add"} onClick={(e) => technologiesHandler(e, filter, setFilter, techsFiltered, setTechsFiltered)} />
                </div>
                <ul className={style.technologiesFiltered__container}>
                  {techsFiltered.length > 0 ? (
                    techsFiltered.map((tech, index) => {
                      return (
                        <li
                          key={`${tech}__${index}`}
                          onClick={(e) => removeTech(e, techsFiltered, setTechsFiltered)}
                          className={`${style.technology} ${style.technologyFiltered}`}
                        >
                          {tech}
                        </li>
                      );
                    })
                  ) : (
                    <li>All</li>
                  )}
                </ul>
                <h5>Experience</h5>
                <select
                  name="experience"
                  id=""
                  value={filter.experience}
                  onChange={(e) => filterHandler(e, filter, setFilter)}
                  className={style.selector}
                >
                  <option value={"all"}>Select a experience</option>;<option value="Training">Training</option>
                  <option value="Junior">Junior</option>
                  <option value="Semi-Senior">Semi-Senior</option>
                  <option value="Senior">Senior</option>
                </select>
                <h5>Modality</h5>
                <select
                  name="modality"
                  id=""
                  value={filter.modality}
                  onChange={(e) => filterHandler(e, filter, setFilter)}
                  className={style.selector}
                >
                  <option value={"all"}>Select a modality</option>;<option value="Remote">Remote</option>
                  <option value="Presential">Presential</option>
                </select>
                <h5>Min Salary</h5>
                <input
                  type="number"
                  name="minSalary"
                  id=""
                  value={filter.minSalary}
                  onChange={(e) => filterHandler(e, filter, setFilter)}
                  min={0}
                  className={style.selector}
                />
                <h5>Max Salary</h5>
                <input
                  type="number"
                  name="maxSalary"
                  id=""
                  min={filter.minSalary}
                  value={filter.maxSalary}
                  onChange={(e) => filterHandler(e, filter, setFilter)}
                  className={style.selector}
                />
                <h5>Contract</h5>
                <select
                  name="contract"
                  id=""
                  value={filter.contract}
                  onChange={(e) => filterHandler(e, filter, setFilter)}
                  className={style.selector}
                >
                  <option value={"all"}>Select a contract</option>;<option value="Seasonal">Seasonal</option>
                  <option value="Indeterminate">Indeterminate</option>
                </select>
                {/* <button className={style.button}>Filter</button> */}
              </form>
            </aside>
            <div className={style.jobs__container}>
              <h1>Jobs</h1>
              <div className={style.jobs__list}>
                {posts.length > 0 ? (
                  filterPosts(posts, filter, techsFiltered, technologies).map((post, index) => {
                    return (
                      <div key={"post__" + post.id} className={style.job}>
                        <h5 className={style.job__title}>{post.titlePost}</h5>
                        <p className={style.job__description}>{post.descripcion}</p>
                        <ul className={style.job__technologies}>
                          {post.technologiesId.length > 0
                            ? post.technologiesId.map((technologyId, index) => {
                                let technology = technologies[technologyId - 1];
                                return (
                                  <li key={`${technology}_${index}`} className={style.technology}>
                                    {technology.name}
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                        <ul className={style.job__info}>
                          <li>
                            <b>Modality:</b> {post.modality}
                          </li>
                          <li>
                            <b>Experience:</b> {post.experience}
                          </li>
                          <li>
                            <b>Salary:</b> ${post.min_salary} - ${post.max_salary}
                          </li>
                          <li>
                            <b>Contract:</b> {post.typeof_contract}
                          </li>
                        </ul>
                        <button className={style.button}>More info</button>
                      </div>
                    );
                  })
                ) : (
                  <li>No jobs available</li>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function filterHandler(e, filter, setFilter) {
  let inputName = e.target.name;
  let inputValue = e.target.value;
  filter[inputName] = inputValue;
  setFilter({ ...filter });
}

function technologiesHandler(e, filter, setFilter, techsFiltered, setTechsFiltered) {
  if (!techsFiltered.includes(filter.technology) && filter.technology !== "all") {
    setTechsFiltered([...techsFiltered, filter.technology]);
  }
}

function filterPosts(posts, filter, techsFiltered, technologies) {
  if (techsFiltered.length > 0) {
    // techsFiltered
    posts = posts.filter((post) => {
      let display = false;
      post.technologiesId.forEach((techId) => {
        techsFiltered.includes(technologies[techId - 1].name) ? (display = true) : (display = false);
      });
      return display;
    });
  }
  if (filter.contract !== "all") {
    posts = posts.filter((post) => {
      return filter.contract === post.typeof_contract;
    });
  }
  if (filter.experience !== "all") {
    posts = posts.filter((post) => {
      return filter.experience === post.experience;
    });
  }
  if (filter.modality !== "all") {
    posts = posts.filter((post) => {
      return filter.modality === post.modality;
    });
  }
  if (filter.minSalary && filter.maxSalary) {
    posts = posts.filter((post) => {
      return post.min_salary >= Number(filter.minSalary) && post.max_salary <= Number(filter.maxSalary);
    });
  }
  return posts;
}

function removeTech(e, techsFiltered, setTechsFiltered) {
  let tech = e.target.innerText;
  setTechsFiltered(techsFiltered.filter((techFiltered) => techFiltered !== tech));
}

function submitHandler(e) {
  e.preventDefault();
}
