import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAiPyCXrHkYrZVJ1xLZKPjHHtRa8eFH1R4",
    authDomain: "react-netflix-clone-5c56d.firebaseapp.com",
    projectId: "react-netflix-clone-5c56d",
    storageBucket: "react-netflix-clone-5c56d.appspot.com",
    messagingSenderId: "124391656986",
    appId: "1:124391656986:web:4810a33e7fffe2acd5cba3",
    measurementId: "G-NEXYJMZKPL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app)