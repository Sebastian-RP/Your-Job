import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCompany } from "../../Redux/Actions/Actions";
import style from "./register.module.css";

export default function RegisterCompany({props}) {
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
  const [country, setCountry] = useState("");
  const [input, setInput] = useState({
    email: "",
    name: "",
    phone: 0,
    prop_name: "",
    address: "",
    linkedin: "",
    desc: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const addCountry = (country) => {
    setCountry(country);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCompany = {
      email: input.email,
      name: input.name,
      propietary_name: input.prop_name,
      phone: parseInt(input.phone),
      address: input.address,
      url: input.linkedin,
      nationality: country,
      description: input.desc,
      premium: null,
    };

    dispatch(createCompany(newCompany));
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
              placeholder="Company Name"
              autoComplete="off"
            />
            <br />

            <input
              name="prop_name"
              onChange={(e) => handleChange(e)}
              placeholder="Propietary Name"
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
              name="phone"
              onChange={(e) => handleChange(e)}
              placeholder="Phone Number"
              autoComplete="off"
            />
            <br />
            <label>Country of Origin: {country}</label>
            <div>
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

            <textarea
              name="desc"
              onChange={(e) => handleChange(e)}
              placeholder="Description"
              cols="40"
              autoComplete="off"
            />
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
