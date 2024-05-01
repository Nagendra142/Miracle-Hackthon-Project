import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState('');
    const [experience, setExperience] = useState('');
    const [price, setPrice] = useState('');
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [special, setSpecial] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== cpassword) {
            setError(true);
            
        }

        const newDat = {
            name,
            username,
            email,
            phone,
            experience,
            price,
            password,
            special
        };
        try {
            const response = await fetch("https://miracle-project-final.vercel.app/register/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newDat),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            navigate("/signin");
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setError(false);
    };
   
        return (
            <div className="main-home">
                <h1 className="diag-title">Register</h1>
                <div className="register-home">

                    <form
                        className="register-form"
                        onSubmit={(e) => {
                            
                            handleSubmit(e);
                        }}
                    ><div>{error && <div><p style={{ color: "red" }}>Passwords must be same</p></div>}</div>
                        <div className="inner-form">
                            <p>Name</p>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required={true}
                                value={name}
                            />
                        </div>
                        <div className="inner-form">
                            <p>Email</p>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                                value={email}
                            />
                        </div>
                        <div className="inner-form">
                            <p>Phone</p>
                            <input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                required={true}
                                value={phone}
                            />
                        </div>
                        <div className="inner-form">
                            <p>Experience in years</p>
                            <input
                                type="text"
                                onChange={(e) => setExperience(e.target.value)}
                                required={true}
                                value={experience}
                            />
                        </div>
                        <div className="inner-form">
                            <p>Speciality</p>
                            <input
                                type="text"
                                onChange={(e) => setSpecial(e.target.value)}
                                required={true}
                                value={special}
                            />
                        </div>
                        <div className="inner-form">
                            <p>Cost of Service</p>
                            <input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                required={true}
                                value={price}
                            />
                        </div>
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
                            <p>Confirm Password</p>
                            <input
                                type="password"
                                onChange={(e) => setCpassword(e.target.value)}
                                required={true}
                                value={cpassword}
                            />
                        </div>
                        <div className="inner-form">
                            <button
                                className="butt cust"
                                style={{ height: "30px", width: "100%" }}
                            >
                                Register
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        );
    };

    export default Register;
