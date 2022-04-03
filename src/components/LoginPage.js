import React from 'react';
import './style.css';

export default function LoginPage() {
  return (
    <div className="login-container">
        
        
        <div className="loginpg">
        <label>Username</label>
        <input type="text" placeholder="Username" value="name"/><br/>

        <label>Password</label>
        <input type="text" placeholder="Password" value="pass"/><br/>
        <button>Login</button>
        </div>
    </div>
  )
}
