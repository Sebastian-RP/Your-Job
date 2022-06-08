import {db} from "../../Components/Firebase/credenciales.js";
import {collection, getDocs} from "firebase/firestore";

export const GET_ALL_EMPLOYEES = "GET_ALL_EMPLOYEES";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllEmployees() {
  return { type: GET_ALL_EMPLOYEES, payload: ["empleado1", "empleado2"] };
}


export async function getAllProducts() {
  const collectionRef = collection(db, "products");
  const snaps = await getDocs(collectionRef);
  const products = []
  snaps.forEach((snap) => {
    products.push(snap.data());
  })
  console.log(products)
  return { type: GET_ALL_PRODUCTS, payload: products };
}