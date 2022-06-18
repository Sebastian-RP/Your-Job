import { auth } from "./credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import getPaymentsByUID from "./getPaymentsByUID";


async function loginEmail(user, password, carrito) {
    try {
        await createUserWithEmailAndPassword(auth, user.email, password)
        .then((userCredential) => {
            // Signed in
            return userCredential.user;
        })
        .catch((error) => {
            return error.code;
        });

        const result = await signInWithEmailAndPassword( auth, user.email, password);
        let userID = result.user.uid;
        let array = await getPaymentsByUID(userID);
        if(array.length === 0){
            return userID
        }else {
            userID = carrito.map(element => {
                if((element.stripe_metadata_clase === "primera") && (array.find(element => element.items[0].price.product.metadata.clase === "primera"))){
                    return "You have an active premium plan 1"
                }
                if((element.stripe_metadata_clase === "segunda") && (array.find(element => element.items[0].price.product.metadata.clase === "segunda"))){
                    return "You have an active premium plan 2"
                }
                if(array[0].items.length>1){
                    return "You have both active plans"
                }
                if((element.stripe_metadata_clase === "primera")||(element.stripe_metadata_clase === "segunda")){
                    return result.user.uid
                }
            }
            )
            if(userID.includes(result.user.uid)) return result.user.uid
            return userID
        }
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default loginEmail;
