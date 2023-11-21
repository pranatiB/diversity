// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBH6aFbrJBdNYwsn_cxErnr6sOSIpVQxGw",
//   authDomain: "smarthire-66650.firebaseapp.com",
//   projectId: "smarthire-66650",
//   storageBucket: "smarthire-66650.appspot.com",
//   messagingSenderId: "676458811771",
//   appId: "1:676458811771:web:6af6fceea9c9f347592dde",
//   measurementId: "G-ZCQDXZWT5E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);

// export {db}


// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';  // Add this line for authentication
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH6aFbrJBdNYwsn_cxErnr6sOSIpVQxGw",
  authDomain: "smarthire-66650.firebaseapp.com",
  projectId: "smarthire-66650",
  storageBucket: "smarthire-66650.appspot.com",
  messagingSenderId: "676458811771",
  appId: "1:676458811771:web:6af6fceea9c9f347592dde",
  measurementId: "G-ZCQDXZWT5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize authentication
const db = getFirestore(app);

export { auth, db };