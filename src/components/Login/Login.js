import React from 'react';
import "./Login.css";

function Login({login}) {
  return (
    <div className="login">
      <button type="button" className="loginButton" onClick={login}>Signin with GOOGLE</button>
    </div>
  );
}

export default Login;