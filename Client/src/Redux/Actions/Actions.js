import axios from "axios";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
<<<<<<< HEAD
export const GET_USER_INFO = "GET_USER_INFO";

=======
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
>>>>>>> 293d1f2fec37bf10b819c3f3122ab687447f6ef4
export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}

<<<<<<< HEAD
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
=======
import {db} from "../../Components/Firebase/credenciales.js";
import {collection, getDocs} from "firebase/firestore";

export async function getAllProducts() {
  const collectionRef = collection(db, "products");
  const snaps = await getDocs(collectionRef);
  const products = []
  snaps.forEach((snap) => {
    products.push(snap.data());
  })
  console.log(products)
  return { type: GET_ALL_PRODUCTS, payload: products };
>>>>>>> 293d1f2fec37bf10b819c3f3122ab687447f6ef4
}
