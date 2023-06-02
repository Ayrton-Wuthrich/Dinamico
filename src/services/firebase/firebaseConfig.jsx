import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGdq4ctmnoq0EJHcJADUwlcIVZh8ocM1M",
    authDomain: "dinamico-4f67f.firebaseapp.com",
    projectId: "dinamico-4f67f",
    storageBucket: "dinamico-4f67f.appspot.com",
    messagingSenderId: "894498093410",
    appId: "1:894498093410:web:2bf2e9fb504b03d04cd43b",
    measurementId: "G-9R0DS5S40K",
};

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
