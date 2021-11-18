import React from "react";
import LoginForm from "./login-form";

var isLoggedIn=true;

function App() {
  return (
    <div className="container">
     { isLoggedIn === true ? <h1>Hello</h1> : <LoginForm />}
    </div>
  );
}

export default App;