// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoYzGxXiNpIUyzVfvbxSiajj0QJgd1vJc",
  authDomain: "foodapp-d0520.firebaseapp.com",
  databaseURL: "https://foodapp-d0520-default-rtdb.firebaseio.com",
  projectId: "foodapp-d0520",
  storageBucket: "foodapp-d0520.appspot.com",
  messagingSenderId: "856040453575",
  appId: "1:856040453575:web:92096dce3cedcec5e355e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
