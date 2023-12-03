// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgnr7gw8-0L-aOWy3DONrqsYlPRYwGRQ",
  authDomain: "challenge-f7ad3.firebaseapp.com",
  projectId: "challenge-f7ad3",
  storageBucket: "challenge-f7ad3.appspot.com",
  messagingSenderId: "291195278019",
  appId: "1:291195278019:web:b1575cc8d0b5e7e52a4876",
  measurementId: "G-K7949YLFV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const analytics = getAnalytics(app);
export default app;