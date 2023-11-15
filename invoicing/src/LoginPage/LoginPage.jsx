import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const value = { email: username, password: password };
        try {
            const response = await fetch("http://localhost:8000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            });
            const data = await response.json();
            
            if(data?.token) {
                localStorage.setItem("token", data?.token);
                navigate("/")
            } else {
                alert("Email or password wrong")
            }

        } catch (error) {
            console.log(error)
        }
        // console.log({ "email": username, "password": password })
    };

    return (

        <div
            className="container d-flex justify-content-center align-items-center vh-100"
            style={{ maxWidth: "700px" }}>
            <h1 className="container d-flex justify-content-center align-items-center vh-100">Login Page</h1>
            <form className="p-4 border shadow w-100">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        UserName:
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="paassword"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}>
                    Login:
                </button>
            </form>
        </div>
    );
};

export default LoginPage;