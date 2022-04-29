// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { debugErrorMap, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGDDmZxK5KP7rlKxVxGqROUwi5AV7nlBg",
    authDomain: "trends-9562b.firebaseapp.com",
    projectId: "trends-9562b",
    storageBucket: "trends-9562b.appspot.com",
    messagingSenderId: "499666373696",
    appId: "1:499666373696:web:50cd5a7c3f2d7425aba3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;