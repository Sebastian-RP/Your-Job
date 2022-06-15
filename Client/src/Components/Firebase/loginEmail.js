import { auth } from "./credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updatePremiumPlan } from "../../Redux/Actions/Actions";
// import { collection, doc, getDoc, getDocs } from "firebase/firestore";


async function loginEmail(user, password, userInfo, carrito) {
    try {
        const newUser = await createUserWithEmailAndPassword(auth, user.email, password)
        .then((userCredential) => {
            // Signed in
            return userCredential.user;
        })
        .catch((error) => {
            return error.code;
        });
        let newUserPremium = 0;
         
        if (carrito.length === 1) {
            newUserPremium = carrito.map(element => {
                if(element.priceId === "price_1L8PiyAVAGwpZp37HtBfrXAq"){
                    return 1
                }else if(element.priceId === "price_1L8PlDAVAGwpZp377IJz6ge3"){
                    return 2
                }
            })
            if(userInfo.premium === null) updatePremiumPlan(userInfo.id, newUserPremium)
        } else{
            newUserPremium = 3;
            if(userInfo.premium === null) updatePremiumPlan(userInfo.id, newUserPremium)
        }
        newUserPremium = newUserPremium[0];
        if(userInfo.premium === 1 && (newUserPremium === 3 || newUserPremium === 1)) return ("Ya tienes este plan premium")
        if(userInfo.premium === 2 && (newUserPremium === 3 || newUserPremium === 2)) return ("Ya tienes este plan premium")
        
        updatePremiumPlan(userInfo.id, newUserPremium)
        
        const result = await signInWithEmailAndPassword( auth, user.email, password);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default loginEmail;
