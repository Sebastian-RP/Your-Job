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
export const GET_ALL_POSTULATES = "GET_ALL_POSTULATES";
export const ADD_CARRITO = "ADD_CARRITO";
export const GET_ALL_POSTULATES_FROM_POST = "GET_ALL_POSTULATES_FROM_POST";
export const CLEAR_CARRITO = "CLEAR_CARRITO";
export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const GET_COMPANY_BY_EMAIL = "GET_COMPANY_BY_EMAIL";
export const CREATE_COMPANY = "CREATE_COMPANY";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_TECHNOLOGY = "DELETE_TECHNOLOGY";
export const DELETE_FORUM_POST = "DELETE_FORUM_POST";
export const DELETE_USER = "DELETE_USER";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const ADD_TECHNOLOGY = "ADD_TECHNOLOGY";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}

export async function getUserInfo(userName) {
  try {
    const userData = await axios.get(`/users/${userName}`);
    return {
      type: GET_USER_INFO,
      payload: userData.data,
    };
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export async function getAllProducts(selector) {
  return async function (dispatch) {
    try {
      const collectionRef = collection(db, "products");
      const filtradoActivos = query(
        collectionRef,
        where("metadata.tipo", "==", selector)
      );
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
      return dispatch({ type: GET_ALL_PRODUCTS, payload: products });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllTechnologies() {
  return async function (dispatch) {
    try {
      const technologies = await axios.get("/technology");
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
  try {
    const usersList = await axios.get("/users");
    return { type: GET_ALL_USERS, payload: usersList.data };
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export function createUser(user) {
  return async function (dispatch) {
    console.log(user);
    try {
      const newUser = await axios.post("/users/login", {
        email: user.email,
        name: user.name,
        employment_status: user.employment_status,
        age: user.age,
        description: user.description,
        technologiesName: user.technologies,
        nationality: user.nationality,
        url: user.url,
        cv: user.cv,
        premium: null,
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
      const newCompany = await axios.post("/company/login", {
        email: company.email,
        name: company.name,
        phone: company.phone,
        image: company.image,
        propietary_name: company.propietary_name,
        address: company.address,
        url: company.url,
        nationality: company.nationality,
        description: company.description,
        premium: null,
      });
      return dispatch({
        type: CREATE_COMPANY,
        payload: newCompany.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllPost() {
  return async function (dispatch) {
    try {
      const posts = await axios.get("/companyPost");
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
      const companies = await axios.get("/company");
      return dispatch({
        type: GET_ALL_COMPANIES,
        payload: companies.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export async function updatePremiumPlan(userID, premiumService) {
  try {
    const user = await axios.put(`/users/${userID}`, {
      premium: premiumService,
    });
    return user;
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export function getAllPostsFromCompany(id) {
  return async function (dispatch) {
    try {
      const posts = await axios.get(`/companyPost/${id}`);
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
  return async function (dispatch) {
    try {
      const newPostulate = await axios.post("/postulates", {
        name: value.name,
        url: value.url,
        postId: value.postId,
      });
      return newPostulate;
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getPostulates(email) {
  return async function (dispatch) {
    try {
      const resp = await axios.get("/postulates/" + email);
      return dispatch({
        type: GET_ALL_POSTULATES,
        payload: resp.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export async function addCarrito(element) {
  return async function (dispatch) {
    return dispatch({
      type: ADD_CARRITO,
      payload: element,
    });
  };
}

export async function clearCarrito() {
  return async function (dispatch) {
    return dispatch({
      type: CLEAR_CARRITO,
      payload: [],
    });
  };
}

export function getConversations(id) {
  return async function () {
    const conversations = await axios.get(`/conversation/${id}`);
    return { type: GET_CONVERSATIONS, payload: conversations.data };
  };
}

export function createJob(value) {
  return async function (dispatch) {
    try {
      const data = await axios.post(`/companyPost/${value.id}`, {
        titlePost: value.titlePost,
        experience: value.experience,
        typeof_contract: value.typeof_contract,
        descripcion: value.descripcion,
        min_salary: value.min_salary,
        max_salary: value.max_salary,
        modality: value.modality,
        technologiesId: value.technologiesId,
      });
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
}
export function getUserByEmail(email) {
  return async function (dispatch) {
    const userEmail = await axios.get("/users/profile?email=" + email);
    return dispatch({ type: GET_USER_BY_EMAIL, payload: userEmail.data });
  };
}

export function getCompanyByEmail(email) {
  return async function (dispatch) {
    const companyEmail = await axios.get("/company/profile?email=" + email);
    return dispatch({ type: GET_COMPANY_BY_EMAIL, payload: companyEmail.data });
  };
}

export function deletePost(value) {
  return async function () {
    try {
      const deleted = await axios.delete(`/companyPost/${value}`);
      return deleted;
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function updateUser(id, changes) {
  return async function (dispatch) {
    try {
      const updated = await axios.put(`/users/${id}`, {
        name: changes.name,
        age: changes.age,
        url: changes.url,
        description: changes.description,
        cv: changes.cv,
        image: changes.image,
        technologiesName: changes.technologiesName,
        nationality: changes.nationality,
      });
      return dispatch({ type: UPDATE_USER, payload: updated.data });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function deleteTech(id) {
  return async function (dispatch) {
    try {
      const techArray = await axios.delete(`/technology/${id}`);
      return dispatch({ type: DELETE_TECHNOLOGY, payload: techArray.data });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const deletedUser = await axios.delete(`/users/${id}`);
      return deletedUser;
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function deleteCompany(id) {
  return async function (dispatch) {
    try {
      const deletedCompany = await axios.delete(`/company/${id}`);
      return deletedCompany;
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function addTechnology(name) {
  return async function (dispatch) {
    try {
      const addedTech = await axios.post(`/technology`, { name: name });
      return addedTech;
    } catch (error) {
      console.error(error.message);
    }
  };
}

// export function deleteForumPost(id){
//   return async function (dispatch){
//     try {
//       const forumPostArray = await axios.delete(`/userPost/${id}`)
//       return forumPostArray
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// }
