import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import LoginPage from './components/LoginPage';

import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcRbO6LEp6UjBbpBjD4BzS93J6OCLWYjg",
  authDomain: "web-messanger-4db4a.firebaseapp.com",
  projectId: "web-messanger-4db4a",
  storageBucket: "web-messanger-4db4a.appspot.com",
  messagingSenderId: "162807311510",
  appId: "1:162807311510:web:d103895addd722b552a6b7",
  measurementId: "G-B7221ZGT4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<>

<App/>
{/* <LoginPage/>
<ChatPage/> */}
</>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
