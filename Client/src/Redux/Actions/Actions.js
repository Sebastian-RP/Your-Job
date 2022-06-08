import { db } from "../../Components/Firebase/credenciales.js";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

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
  const snaps = await getDocs(collectionRef);
  const products = [];
  snaps.forEach((snap) => {
    products.push(snap.data());
  });
  return { type: GET_ALL_PRODUCTS, payload: products };
}
