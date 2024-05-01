// Login.js (Frontend)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useContextApi  from "../context/ServiceContext";
const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {login,setLogin}=useContextApi();
    setLogin(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://miracle-project-final.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const { token } = await response.json();
            sessionStorage.setItem("token", token); // Store token in session storage
            setLogin(true);
            console.log(login);
            navigate("/orders");
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <div className="main-home">
            <h1 className="diag-title">Mechanic Login</h1>
            <div className="register-home" style={{ height: "60vh" }}>
                <form className="register-form">
                    {error && <p style={{ color: "red" }}>Invalid username or password</p>}
                    <div className="inner-form">
                        <p>Username</p>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            required={true}
                            value={username}
                        />
                    </div>
                    <div className="inner-form">
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                            value={password}
                        />
                    </div>
                    <div className="inner-form">
                        <button
                            onClick={handleSubmit}
                            className="butt cust"
                            style={{ height: "30px", width: "100%", margin: "10px 0" }}
                        >
                            Login
                        </button>
                        <Link to={"/register"}>
                            <button
                                className="butt cust"
                                style={{ height: "30px", width: "100%", margin: "10px 0" }}
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
