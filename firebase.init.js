// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8AwdRvqqH7o_ZorqlYng4omDZ0-5btSY",
  authDomain: "smart-deals-76468.firebaseapp.com",
  projectId: "smart-deals-76468",
  storageBucket: "smart-deals-76468.firebasestorage.app",
  messagingSenderId: "824117943136",
  appId: "1:824117943136:web:c0c90911348a4b3d311c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
