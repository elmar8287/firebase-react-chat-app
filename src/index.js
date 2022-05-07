import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAriRQ8lewOv8KhhCDWcptdTn1y36MIGhk",
//   authDomain: "react-chat-fa2d4.firebaseapp.com",
//   projectId: "react-chat-fa2d4",
//   storageBucket: "react-chat-fa2d4.appspot.com",
//   messagingSenderId: "601517999182",
//   appId: "1:601517999182:web:c0f7e496af835b996d6f1f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
