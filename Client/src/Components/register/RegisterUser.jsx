import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getAllTechnologies } from "../../Redux/Actions/Actions";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { Widget } from "@uploadcare/react-widget";
import { useParams } from "react-router-dom";
import style from "./register.module.css";

export default function RegisterUser({props}) {
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
  const allTechnologies = useSelector((state) => state.technologies);
  const [technologies, setTechnologies] = useState([]);
  const [employ, setEmploy] = useState(false);
  const [selectedTechs, setSelected] = useState([]);
  const [country, setCountry] = useState("");
  const [uuid, setUuid] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: 0,
    linkedin: "",
    desc: "",
    employ: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTechnologies());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setTechnologies(
      allTechnologies.filter((t) => !selectedTechs.includes(t.name)),
    );
    // eslint-disable-next-line
  }, [selectedTechs]);
  useEffect(() => {
    setTechnologies(allTechnologies);
    // eslint-disable-next-line
  }, [allTechnologies]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let empleado = employ ? "empleado" : "desempleado";
    if (employ) {
      let company = input.employ;
      let descript = input.desc;
      setInput({
        ...input,
        desc: descript.concat(` This user Works at ${company}`),
      });
    }
    let newUser = {
      email: input.email,
      name: input.name,
      employment_status: empleado,
      age: parseInt(input.age),
      image: "no image",
      description: input.desc,
      technologies: selectedTechs,
      nationality: country,
      url: input.linkedin,
      cv: `ucarecdn.com/${uuid}`,
      premium: 0
    };
    console.log(newUser);

    dispatch(createUser(newUser));

    window.location.replace(
      `https://dev-zgaxo6rs.us.auth0.com/continue?state=${props}`,
    );
  };

  return (
    <div className={style.containerRegisterUser}>
      <div className={style.containerCard}>
        <h2> Please fill out the following form with your information</h2>
        <Card className="text-center" style={{ width: "80%", padding: "20px" }}>
          <form className={style.containeForm}>
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Full name"
              autoComplete="off"
            />
            <br />
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              autoComplete="off"
            />
            <br />
            <input
              type={"number"}
              name="age"
              onChange={(e) => handleChange(e)}
              placeholder="Age"
              autoComplete="off"
            />
            <br />
            <div className={style.containerTechnologies}>
              <DropdownButton
                id="dropdown-basic-button"
                title="Select Technologies"
              >
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
              </DropdownButton>
              <label>Technologies:</label>
              <ul>
                {selectedTechs?.map((tech, index) => (
                  <div key={index}>
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
            <br />
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
              <label>Country of Origin: {country}</label>
            </div>
            <br />
            <br />
            <input
              name="linkedin"
              onChange={(e) => handleChange(e)}
              placeholder="Linkedin Profile"
              autoComplete="off"
            />
            <br />
            <br />
            <textarea
              name="desc"
              onChange={(e) => handleChange(e)}
              placeholder="Description"
              cols="40"
            />
            <br />
            <div className={style.containerCheck}>
              <div>
                <label>Are you employed?</label>
                <input
                  type="checkbox"
                  name="employment"
                  id=""
                  onClick={() => setEmploy(!employ)}
                />
                <br />
                <input
                  type="text"
                  name="employ"
                  placeholder="Place of employment"
                  style={{ display: employ ? "" : "none" }}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                />
              </div>
              <div>
                <label>CV:</label>{" "}
                <Widget
                  publicKey="de7dc23d760e287d1cb0"
                  clearable
                  onChange={(file) => {
                    setUuid(file.uuid);
                  }}
                />
              </div>
            </div>
            {/* <input type={"file"} name="cv" onChange={(e) => handleChange(e)} /> */}
          </form>
          <br />
          <div>
            <Button
              variant="primary"
              size="small"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
