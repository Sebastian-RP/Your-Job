import axios from "axios";
import { db } from "../../Components/Firebase/credenciales.js";
import { collection, getDocs, query, where } from "firebase/firestore";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_TECHNOLOGIES = "GET_ALL_TECHNOLOGIES";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_POST = "GET_ALL_POST";

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

export function getAllPost() {
  return async function (dispatch) {
    try {
      const posts = await axios.get("http://localhost:3001/post");
      console.log(posts.data)
      return dispatch({
        type: GET_ALL_POST,
        payload: posts.data,
      });
    } catch (e) {
      console.error("Error: " + e.message);
    }
  };
}