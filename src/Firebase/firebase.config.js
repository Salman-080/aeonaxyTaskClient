// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk-TRSHTrmi4yleCqQdfH7UkdYoHUzsT4",
  authDomain: "aeonaxy-task.firebaseapp.com",
  projectId: "aeonaxy-task",
  storageBucket: "aeonaxy-task.appspot.com",
  messagingSenderId: "446397095711",
  appId: "1:446397095711:web:4892487bb94f2ac544da2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;