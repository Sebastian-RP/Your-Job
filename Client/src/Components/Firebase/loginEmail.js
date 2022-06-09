import { auth } from "./credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

async function loginEmail(email, password) {
    try {
        const result = await signInWithEmailAndPassword( auth, email, password);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default loginEmail;
