import { db } from "../../Components/Firebase/credenciales.js";
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
import getAllPayments from "../../Components/Firebase/getAllPayments.js";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_COMPANY_INFO = "GET_COMPANY_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_TECHNOLOGIES = "GET_ALL_TECHNOLOGIES";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_POST = "GET_ALL_POST";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const GET_ALL_EMPLOYEES_FROM_COMPANY = "GET_ALL_EMPLOYEES_FROM_COMPANY";
export const GET_ALL_POSTS_FROM_COMPANY = "GET_ALL_POSTS_FROM_COMPANY";
export const GET_ALL_POSTULATES = "GET_ALL_POSTULATES";
export const GET_ALL_POSTULATES_FROM_POST = "GET_ALL_POSTULATES_FROM_POST";
export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const GET_COMPANY_BY_EMAIL = "GET_COMPANY_BY_EMAIL";
export const GET_PLANS = "GET_PLANS";
export const ADD_CARRITO = "ADD_CARRITO";
export const CLEAR_CARRITO = "CLEAR_CARRITO";
export const CREATE_COMPANY = "CREATE_COMPANY";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_COMPANY = "UPDATE_COMPANY";
export const DELETE_TECHNOLOGY = "DELETE_TECHNOLOGY";
export const DELETE_FORUM_POST = "DELETE_FORUM_POST";
export const DELETE_USER = "DELETE_USER";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const ADD_TECHNOLOGY = "ADD_TECHNOLOGY";
export const USER_POSTULATES = "USER_POSTULATES";
export const SET_EMAIL_DATA = "SET_EMAIL_DATA";
export const HIRE = "HIRE";
export const GET_ALL_FORUM_POST = "ET_ALL_FORUM_POST";
export const FIRE = "FIRE";
export const REPORT = "REPORT";
export const GET_ALL_REPORTS = "GET_ALL_REPORTS";
export const DELETE_REPORT = "DELETE_REPORT";
export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";

export async function getAllEmployeesCompany(id) {
  return async function (dispatch) {
    try {
      const employees = await axios.get(`/company/employees/${id}`);
      console.log(employees.data);
      return dispatch({
        type: GET_ALL_EMPLOYEES_FROM_COMPANY,
        payload: employees.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
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

export function getCompanyInfo(companyname) {
  return async function (dispatch) {
    try {
      const companyData = await axios.get(
        `/company/profile?companyname=${companyname}`
      );
      return dispatch({ type: GET_COMPANY_INFO, payload: companyData.data });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}

export function getAllProducts(selector) {
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
        image: user.image,
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
    let numero = 0;
    if (premiumService.map((element) => element.includes("1"))) {
      numero = 1;
    }
    if (premiumService.map((element) => element.includes("2"))) {
      numero = 2;
    }
    if (premiumService.length === 2) {
      numero = 3;
    }
    const user = await axios.put(`/users/${userID}`, {
      premium: numero,
    });
    return user;
  } catch (e) {
    console.error("Error: " + e.message);
  }
}

export async function updatePremiumPlanCompany(email, premiumService) {
  try {
    let numero = 0;
    if (premiumService.map((element) => element.includes("1"))) {
      numero = 1;
    }
    if (premiumService.map((element) => element.includes("2"))) {
      numero = 2;
    }
    if (premiumService.length === 2) {
      numero = 3;
    }
    const company = await axios.put(`/company/${email}`, {
      premium: numero,
    });
    return company;
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
        companyId: value.companyId,
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
        Account: changes.Account,
      });
      return dispatch({ type: UPDATE_USER, payload: updated.data });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function updateCompany(email, changes) {
  return async function (dispatch) {
    try {
      const updated = await axios.put(`/company/${email}`, {
        name: changes.name,
        url: changes.url,
        description: changes.description,
        image: changes.image,
        nationality: changes.nationality,
        phone: changes.phone,
        address: changes.address
      });
      return dispatch({ type: UPDATE_COMPANY, payload: updated.data });
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

export function getActivePlans(user) {
  return async function (dispatch) {
    try {
      let UserPlans = await getAllPayments(user);
      if (UserPlans.length === 0) {
        return dispatch({
          type: GET_PLANS,
          payload: ["You don't have any plan"],
        });
      }
      if (UserPlans.length > 1) {
        let newArray = UserPlans.map(
          (item) => item.items[0].price.product.name
        );
        return dispatch({ type: GET_PLANS, payload: newArray });
      }
      if (UserPlans.length === 1) {
        if (UserPlans[0].items.length > 1) {
          let newArray = UserPlans[0].items.map(
            (item) => item.price.product.name
          );
          return dispatch({ type: GET_PLANS, payload: newArray });
        } else {
          return dispatch({
            type: GET_PLANS,
            payload: [UserPlans[0].items[0].price.product.name],
          });
        }
      }
    } catch (error) {
      console.error("Este error larga el getActivePlans", error.message);
      return dispatch({
        type: GET_PLANS,
        payload: ["To see your plans, please log in"],
      });
    }
  };
}

export function logIn(email) {
  return async function (dispatch) {
    try {
      let loggedUser = await axios.get("/users/profile?email=" + email);
      let loggedCompany = await axios.get("/company/profile?email=" + email);
      return dispatch({
        type: LOG_IN,
        payload: {
          loggedUser: loggedUser.data,
          loggedCompany: loggedCompany.data,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function hire(userId, companyId) {
  return async function (dispatch) {
    try {
      let response = await axios.put("/company/hire", {
        userId: userId,
        companyId: companyId,
      });
      return dispatch({
        type: HIRE,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function fire(employeeId, companyId) {
  return async function (dispatch) {
    try {
      let response = await axios.put("/company/fire", {
        employeeId: employeeId,
        companyId: companyId,
      });
      return dispatch({
        type: FIRE,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function report(id, contentType, reasons) {
  return async function (dispatch) {
    try {
      const sentReport = axios.post("/report", {
        contentId: id.toString(),
        contentType: contentType,
        reasons: reasons,
      });
      return sentReport;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllReports() {
  return async function (dispatch) {
    try {
      const reports = await axios.get("/report");
      return dispatch({
        type: GET_ALL_REPORTS,
        payload: reports.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteReport(id) {
  return async function (dispatch) {
    try {
      const delReport = await axios.delete(`/report/${id}`);
      return dispatch({
        type: DELETE_REPORT,
        payload: delReport.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteForumPost(id) {
  return async function (dispatch) {
    try {
      const forumPostArray = await axios.delete(`/userPost/${id}`);
      return forumPostArray;
    } catch (error) {
      console.error(error.message);
    }
  };
}

export function allPostulatesUser(name) {
  return async function (dispatch) {
    try {
      const dataPostsUser = await axios.get(`/userPost/${name}`);
      return dispatch({
        type: USER_POSTULATES,
        payload: dataPostsUser.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function setEmailData(user) {
  return async function (dispatch) {
    return dispatch({
      type: SET_EMAIL_DATA,
      payload: user,
    });
  };
}

export function getAllForumPost() {
  return async function (dispatch) {
    const dataPost = await axios.get("/forum/posts");
    return dispatch({ type: GET_ALL_FORUM_POST, payload: dataPost.data });
  };
}

export function createCommentPost(value) {
  return async function (dispatch) {
    return await axios.post("/forum/comment", value);
  };
}

export function getAllNotificationPost(user) {
  return async function(dispatch) {
    let dataNot = await axios.get(`/forum/notification/${user}`);
    return dispatch({ type: GET_NOTIFICATIONS, payload: dataNot.data });
  }
}

export function deleteNotification(user) {
  return async function(dispatch) {
    return await axios.delete(`/forum/notification/${user}`)
  }
}

export function sendNotificationPost(value) {
  return async function(dispatch) {
    return await axios.post('/forum/notification', value)
  }
}