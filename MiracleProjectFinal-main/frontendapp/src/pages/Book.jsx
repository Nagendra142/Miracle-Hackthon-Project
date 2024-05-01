import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Book = () => {
    const [name, setName] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [phone, setPhone] = useState('');
    const [problem, setProblem] = useState('');
    const [error,setError]=useState(false);
    const [status,setStatus]=useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {state}=location;
    const {latitude,longitude}=state;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newDat = {
            name,
            phone,vehicle,problem,latitude,longitude,status
        };
        console.log(newDat);
        try {
            const response = await fetch("https://miracle-project-final.vercel.app/book/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newDat),
            });

            if (!response.ok) {
                throw new Error("Booking failed");
            }

            // navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setError(false);
        navigate("/customer");
    };
   
        return (
            <div className="main-home">
                <h1 className="diag-title">Book Your Service</h1>
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
                            <p>vehicle</p>
                            <input
                                type="text"
                                onChange={(e) => setVehicle(e.target.value)}
                                required={true}
                                value={vehicle}
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
                            <p>Problem</p>
                            <input
                                type="text"
                                onChange={(e) => setProblem(e.target.value)}
                                required={true}
                                value={problem}
                            />
                        </div>
                        
                        <div className="inner-form">
                            <button
                                className="butt cust"
                                style={{ height: "30px", width: "100%" }}
                            >
                                Book Service
                            </button>
                        </div>
                        {/* <div className="inner-form">
                            <button onClick={handleGetLocation()}
                                className="butt cust"
                                style={{ height: "30px", width: "100%" }}
                            >
                                Get Location
                            </button>
                        </div> */}
                    </form>


                </div>
            </div>
        );
    };

    export default Book;
