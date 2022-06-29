import { auth } from "./credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import getPaymentsByUID from "./getPaymentsByUID";

async function getAllPayments(user) {
    try {        
        await createUserWithEmailAndPassword(auth, user.email, "123456")
        .then((userCredential) => {
            // Signed in
            return userCredential.user;
        })
        .catch((error) => {
            return error.name;
        });
        
        const result = await signInWithEmailAndPassword( auth, user.email, "123456");

        let userID = result.user.uid;
        let array = await getPaymentsByUID(userID);
        return array
    } catch (error) {
        console.log(error)
        return "error";
    }
}

export default getAllPayments;
