import { auth } from "./credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, doc, getDoc, getDocs } from "firebase/firestore";

async function loginEmail(email, password) {
    try {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            return userCredential.user;
        })
        .catch((error) => {
            return error.code;
        });
        if(newUser === "auth/email-already-in-use"){

            // ::::::::: Proxima impementacion de validacion si el usuario ya adquirio la subscripcion anteriormente

            // const colectionRef = collection(db, `customers/${result.user.uid}/subscriptions`);
            // const docRef = doc(colectionRef, result.user.uid)
            // const snapDoc = await getDoc(docRef)
            // const subscriptions = snapDoc.data()
            // const subscriptionsSnaps = await getDocs(collection(snapDoc.ref, "subscriptions"));

            const result = await signInWithEmailAndPassword( auth, email, password);
            return result;

        } else{
            const result = await signInWithEmailAndPassword( auth, email, password);
            return result;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default loginEmail;
