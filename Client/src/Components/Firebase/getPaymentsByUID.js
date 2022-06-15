import { db } from "./credenciales";
import { collection, getDocs } from "firebase/firestore";

async function getPaymentsByUID(uid) {
    const collectionRef = collection(db, `customers/${uid}/subscriptions`);
    const snaps = await getDocs(collectionRef);
    const array = snaps.docs.map((item) => item.data());
    return array;
}

export default getPaymentsByUID;