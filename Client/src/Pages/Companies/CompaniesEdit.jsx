import React, { useEffect } from "react";
import style from "../Users/perfil.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCompany, getCompanyInfo } from "../../Redux/Actions/Actions";
import Dropdown from "react-bootstrap/Dropdown";
import { Widget } from "@uploadcare/react-widget";
import { useState } from "react";
import Home from "../Home/home";
import DropdownButton from "react-bootstrap/DropdownButton";
import swal from "sweetalert";
import Navbar from "../../Components/NavBar/NavBar";

export default function CompaniesEdit() {
  const companyData = useSelector((state) => state.company);
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
  const { companyname } = useParams();
  const loggedCompany = useSelector((state) => state.myCompany);
  const [ownProfile, setOwnProfile] = useState(false);
  const [country, setCountry] = useState(companyData?.nationality);
  const [uuidImage, setUuidImage] = useState(companyData?.image);
  const [input, setInput] = useState({
    name: companyname,
    linkedin: companyData?.url,
    desc: companyData?.description,
    phone: companyData?.phone,
    address: companyData?.address,
  });

  useEffect(() => {
    dispatch(getCompanyInfo(companyname))
    if (loggedCompany.name === companyname) {
      setOwnProfile(true);
    }
    //eslint-disable-next-line
  }, []);


  //----------------------------------

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
    let image = uuidImage;
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
      url: input.linkedin,
      description: input.desc,
      image: image,
      nationality: country,
      phone: input.phone,
      address: input.address
    };
    dispatch(updateCompany(companyData?.email, update));
    swal({
      title: "Success!",
      text: "Your changes have been submitted.",
      icon: "success",
    });

    setTimeout(() => {
      navigate(`/company/${input.name}`);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div>
        {ownProfile ? (
            <form>
                <div className={style.containerPerfil}>
                    <div className={style.headerEdit}>
                        <div>
                            <button className={style.Button} onClick={() => navigate(`/company/${loggedCompany.name}`)}>
                                Back
                            </button>
                            <button className={style.Button} type="submit" onClick={(e) => handleUpdate(e)}>
                                Update
                            </button>
                        </div>
                        <div className={style.pictureEdit}>
                            <img src={loggedCompany.image} alt="" />
                            <Widget
                                publicKey="de7dc23d760e287d1cb0"
                                clearable
                                imagesOnly
                                crop=""
                                onChange={(file) => {
                                setUuidImage(file.uuid);
                                }}
                            />
                            <label>Name: {" "}</label>
                                <input
                                defaultValue={companyname}
                                name="name"
                                required
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                />
                        </div>
                    </div>
                    <div className={style.sugestionsEdit}>
                        <h1>Edit your profile info</h1>
                        <hr />
                        <label>Description: {" "}</label>

                        <div>
                        <textarea
                            defaultValue={companyData?.description}
                            cols="50"
                            rows="10"
                            name="desc"
                            onChange={(e) => {
                            handleChange(e);
                            }}
                        />
                        </div>
                        <hr />
                    </div>
                    <div className={style.perfilInfo}>
                        <div className={style.about}>
                            <label>Linkedin/etc...:</label>{" "}
                            <input
                                defaultValue={companyData?.url}
                                name="linkedin"
                                onChange={(e) => {
                                handleChange(e);
                                }}
                            />
                            <br />
                            <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                justifyContent: "center",
                                gap: "10px",
                                marginBottom: "20px",
                            }}
                            >
                                <label>
                                    Country of Origin: {country || companyData.nationality}
                                </label>
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
                            <hr />
                            <div>
                                <label>Phone:</label>{" "}
                                <input
                                    defaultValue={companyData?.phone}
                                    name="phone"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }
                                    }
                                />
                            </div>  
                            <div>
                                <label>Address:</label>{" "}
                                <input
                                    defaultValue={companyData?.address}
                                    name="address"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }
                                    }
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
    </>
  );
}
