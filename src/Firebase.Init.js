// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_dYfwW2U0QOch2LuUlnvb2kVdPUq-E38",
  authDomain: "gear-up-7f7ce.firebaseapp.com",
  projectId: "gear-up-7f7ce",
  storageBucket: "gear-up-7f7ce.appspot.com",
  messagingSenderId: "373627540937",
  appId: "1:373627540937:web:81dbc21da5c4d3d8210418",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
