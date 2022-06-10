import { db } from "./credenciales";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

async function createCheckoutSession(uid, cart){

    const collectionRef = collection(db, `customers/${uid}/checkout_sessions`)

    const {id} = await addDoc(collectionRef,{
        mode:"subscription",
        success_url: 'http://localhost:3000/products',
        cancel_url: 'http://localhost:3000/products',
        collect_shipping_address: true,
        line_items: cart.map(item => {
            return{
                quantity: 1,
                price: item.priceId 
            }
        })  
    })

    const cancelarStreaming = onSnapshot(doc(db,`customers/${uid}/checkout_sessions/${id}`),
        (snapshots)=>{
            let url = snapshots.data().url;
            if(url){ 
                cancelarStreaming()
                window.location.href = url}
        }
    ) 

}

export default createCheckoutSession;

