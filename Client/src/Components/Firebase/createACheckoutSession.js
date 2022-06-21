import { db } from "./credenciales";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

async function createCheckoutSession(uid, cart) {
  const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);


  const { id } = await addDoc(collectionRef, {
    mode: "subscription",

    success_url: "https://your-job-seven.vercel.app/success",
    cancel_url: "https://your-job-seven.vercel.app/canceled",
    // success_url: "http://localhost:3000/success",
    // cancel_url: "http://localhost:3000/canceled",

    collect_shipping_address: false,
    line_items: cart.map((item) => {
      return {
        quantity: 1,
        price: item.priceId,
      };
    }),
  });

  const cancelarStreaming = onSnapshot(
    doc(db, `customers/${uid}/checkout_sessions/${id}`),
    (snapshots) => {
      let url = snapshots.data().url;
      if (url) {
        cancelarStreaming();
        window.location.href = url;
        // window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  );
}

export default createCheckoutSession;
