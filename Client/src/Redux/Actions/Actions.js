import { db } from "../../Components/Firebase/credenciales.js";
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_TECHNOLOGIES = "GET_ALL_TECHNOLOGIES";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_POST = "GET_ALL_POST";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_ALL_POSTS_FROM_COMPANY = "GET_ALL_POSTS_FROM_COMPANY";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}

export async function getUserInfo(userName) {
  try {
    const userData = await axios.get(`http://localhost:3001/users/${userName}`);
    return {
      type: GET_USER_INFO,
      payload: userData.data,
    };
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export async function getAllProducts() {
  const collectionRef = collection(db, "products");
  const filtradoActivos = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(filtradoActivos);
  const products = [];
  for await (const snap of snaps.docs) {
    const producto = snap.data();
    producto.id = snap.id;
    const priceSnaps = await getDocs(collection(snap.ref, "prices"));
    producto.prices = priceSnaps.docs[0].data();
    producto.priceId = priceSnaps.docs[0].id;
    products.push(producto);
  }
  return { type: GET_ALL_PRODUCTS, payload: products };
}

export function getAllTechnologies() {
  return async function (dispatch) {
    try {
      const technologies = await axios.get("http://localhost:3001/technology");
      return dispatch({
        type: GET_ALL_TECHNOLOGIES,
        payload: technologies.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export async function getAllUsers() {
  const usersList = await axios.get("http://localhost:3001/users");
  return { type: GET_ALL_USERS, payload: usersList.data };
}

export function createUser(user) {
  return async function (dispatch) {
    console.log(user);
    try {
      const newUser = await axios.post("http://localhost:3001/users/login", {
        email: user.email,
        name: user.name,
        employment_status: user.employment_status,
        age: user.age,
        description: user.description,
        technologiesName: user.technologies,
        nationality: user.nationality,
        url: user.url,
        cv: user.cv,
      });
      return newUser;
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function createCompany(company) {
  return async function (dispatch) {
    try {
      const newCompany = await axios.post(
        "http://localhost:3001/company/login",
        {
          email: company.email,
          name: company.name,
          phone: company.phone,
          propietary_name: company.propietary_name,
          address: company.address,
          url: company.url,
          nationality: company.nationality,
          description: company.description,
        }
      );
      return newCompany;
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllPost() {
  return async function (dispatch) {
    try {
      const posts = await axios.get("http://localhost:3001/companyPost");
      return dispatch({
        type: GET_ALL_POST,
        payload: posts.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllCompanies() {
  return async function (dispatch) {
    try {
      const companies = await axios.get("http://localhost:3001/company");
      return dispatch({
        type: GET_ALL_COMPANIES,
        payload: companies.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllPostsFromCompany(id) {
  return async function (dispatch) {
    try {
      const posts = await axios.get(`http://localhost:3001/companyPost/${id}`);
      return dispatch({
        type: GET_ALL_POSTS_FROM_COMPANY,
        payload: posts.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function postulateJob(value) {
  return async function(dispatch) {
    try {
      const newPostulate = await axios.post(
        "http://localhost:3001/postulates", {
          id: value.id,
          name: value.name,
          url: value.url,
          postId: value.postId
        })
        return newPostulate;
    } catch (e) {
      console.error("Error: " + e.message);
    }
  }
}