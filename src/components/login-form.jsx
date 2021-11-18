import React from "react";
import InputField from "./input";

function LoginForm() {
    return (
        <form className="form">
            <InputField type="text" placeholder="Username" />
            <InputField type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;