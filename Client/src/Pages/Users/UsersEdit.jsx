import React, { useEffect } from "react";
import style from "./perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo, updateUser } from "../../Redux/Actions/Actions";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Widget } from "@uploadcare/react-widget";
import { useState } from "react";
import Home from "../Home/home";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import swal from "sweetalert";

export default function UsersEdit() {
  const userData = useSelector((state) => state.user);
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  // esto es para poder mokear la info ya que esta action se deberia de hacer
  // al hacer el login ya deberia de pasar la informacion al reducer.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const loggedUser = useSelector((state) => state.myUser);
  const allTechnologies = useSelector((state) => state.technologies);
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechs, setSelected] = useState([]);
  const [ownProfile, setOwnProfile] = useState(false);
  const [country, setCountry] = useState(userData?.nationality);
  const [uuidImage, setUuidImage] = useState(userData?.image);
  const [uuidCV, setUuidCV] = useState(userData?.cv);
  const [input, setInput] = useState({
    name: username,
    age: userData?.age,
    linkedin: userData?.url,
    desc: userData?.description,
  });

  useEffect(() => {
    console.log(username);
    getUserInfo(username).then((action) => {
      dispatch(action);
    });
    if (loggedUser.name === username) {
      setOwnProfile(true);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTechnologies(allTechnologies);
    // eslint-disable-next-line
  }, [allTechnologies]);

  //----------------------------------

  useEffect(() => {
    setSelected(userData?.technologiesName);
  }, [userData]);

  useEffect(() => {
    setTechnologies(
      allTechnologies.filter((t) => !selectedTechs?.includes(t.name))
    );
    // eslint-disable-next-line
  }, [selectedTechs]);

  const addTechs = (tech) => {
    if (!selectedTechs.includes(tech)) {
      let aux = [tech];
      setSelected(selectedTechs.concat(aux));
    }
  };

  const removeTech = (tech) => {
    let aux = selectedTechs.filter((element) => element !== tech);
    setSelected(aux);
    console.log(aux);
  };

  const addCountry = (country) => {
    setCountry(country);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let cv = uuidCV;
    let image = uuidImage;
    if (
      !uuidCV.match(
        // eslint-disable-next-line
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
      )
    ) {
      cv = `https://ucarecdn.com/${uuidCV}/`;
    }
    if (
      !uuidImage.match(
        // eslint-disable-next-line
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
      )
    ) {
      image = `https://ucarecdn.com/${uuidImage}/`;
    }
    let update = {
      name: input.name,
      age: input.age,
      url: input.linkedin,
      description: input.desc,
      cv: cv,
      image: image,
      technologiesName: selectedTechs,
      nationality: country,
    };

    dispatch(updateUser(userData?.id, update));
    swal({
      title: "Success!",
      text: "Your changes have been submitted.",
      icon: "success",
    });

    setTimeout(() => {
      navigate(`/users/${input.name}`);
    }, 1500);
  };

  return (
    <div>
      {ownProfile ? (
        <form>
          <div className={style.containerPerfil}>
            <div className={style.header}>
              <Widget
                publicKey="de7dc23d760e287d1cb0"
                clearable
                imagesOnly
                crop=""
                onChange={(file) => {
                  setUuidImage(file.uuid);
                }}
              />
              <div className={style.picture}>
                <img src={loggedUser.image} alt="" />
                <input
                  defaultValue={username}
                  name="name"
                  required
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div>
                <Button onClick={() => navigate(`/users/${loggedUser.name}`)}>
                  Back
                </Button>
              </div>
            </div>
            <div className={style.suggestions}>
              <h2>Suggestions</h2>
              <Button type="submit" onClick={(e) => handleUpdate(e)}>
                Update
              </Button>
            </div>
            <div className={style.perfilInfo}>
              <div className={style.about}>
                <h2>About</h2>
                <p>Status: {userData?.employment_status}</p>
                <label>Linkedin/etc...:</label>{" "}
                <input
                  defaultValue={userData?.url}
                  name="linkedin"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <br />
                <label>Date of Birth:</label>{" "}
                <Form.Control
                  type="date"
                  required
                  name="age"
                  defaultValue={userData?.age}
                  // error={errors.date_of_birth}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {/* <p>Nationality: {userData?.nationality}</p> */}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Select Country"
                    style={{ height: "10px" }}
                  >
                    <div style={{ height: "150px", overflowY: "scroll" }}>
                      {countries.map((country, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              addCountry(country);
                            }}
                            key={index}
                          >
                            {country}
                          </Dropdown.Item>
                        );
                      })}
                    </div>
                  </DropdownButton>
                  <label>
                    Country of Origin: {country || userData.nationality}
                  </label>
                </div>
                Technologies:
                <Dropdown className="d-inline mx-2" autoClose="outside">
                  <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Select Technologies
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {technologies &&
                      technologies.map((tech, index) => {
                        return (
                          <Dropdown.Item
                            onClick={() => {
                              addTechs(tech.name);
                            }}
                            key={index}
                          >
                            {tech.name}
                          </Dropdown.Item>
                        );
                      })}
                  </Dropdown.Menu>
                </Dropdown>
                <ul>
                  {selectedTechs?.map((tech, index) => (
                    <div key={index} className={style.containerTechnologies}>
                      <li
                        onClick={() => {
                          removeTech(tech);
                        }}
                      >
                        {` ${tech} `}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className={style.info}>
                <h2>info</h2>
                <textarea
                  defaultValue={userData?.description}
                  cols="50"
                  rows="10"
                  name="desc"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <hr />

                <div style={{ textAlign: "right" }}>
                  CV:
                  <Widget
                    publicKey="de7dc23d760e287d1cb0"
                    clearable
                    crop=""
                    onChange={(file) => {
                      setUuidCV(file.uuid);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}
