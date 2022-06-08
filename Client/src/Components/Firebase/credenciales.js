import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwA8q2gnQBKT59KTge5mPtBr_MhZAg6JQ",
  authDomain: "angelic-shift-346519.firebaseapp.com",
  projectId: "angelic-shift-346519",
  storageBucket: "angelic-shift-346519.appspot.com",
  messagingSenderId: "313240756703",
  appId: "1:313240756703:web:f6ea136d5a65c50a2ee46a",
  measurementId: "G-ENXKJ9WP6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
