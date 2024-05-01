import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import socketIOClient from 'socket.io-client';

// const socket = socketIOClient('http://localhost:4000');

const Mechanic = () => {
  const [mechanics, setMechanics] = useState([]);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(0); // Initialize latitude state
  const [longitude, setLongitude] = useState(0); // Initialize longitude state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await fetch("https://miracle-project-final.vercel.app/mechanics/");
        if (!response.ok) {
          throw new Error("Failed to fetch mechanics");
        }
        const data = await response.json();
        setMechanics(data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch mechanics");
      }
    };

    fetchMechanics();
  }, []);

  // Function to handle getting user's location
  // Function to handle getting user's location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLatitude = position.coords.latitude;
          const newLongitude = position.coords.longitude;
          setLatitude(newLatitude); // Set latitude state
          setLongitude(newLongitude); // Set longitude state
          console.log(newLatitude, newLongitude);
          navigate("/book", {
            state: { latitude: newLatitude, longitude: newLongitude },
          }); // Navigate with latitude and longitude as props
        },
        (error) => {
          console.error("Error getting location:", error);
          // Handle error if needed
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="main-home diagnosis">
      <h2 className="diag-title">Mechanics Available</h2>
      <div
        className="diag-home mechanic-home"
        style={{ marginRight: "10px", gap: "10px" }}
      >
        {mechanics.map((each, index) => {
          return (
            <div key={index} className="card" style={{ marginRight: "10px" }}>
              <p>Name : {each.name}</p>
              <p>Special in : {each.special}</p>
              <p>
                Experience of{" "}
                <span style={{ fontSize: "26px", color: "red" }}>
                  {each.experience}{" "}
                </span>
                Years
              </p>
              <p>Price : {each.price}</p>
              <p>Phone : {each.phone}</p>
              <div style={{ display: "flex" }}>
                <button className="butt mech" onClick={handleGetLocation}>
                  Book
                </button>
                <br />
                <a href={`tel:+91${each.phone}`}>
                  <button className="butt cust">Call</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mechanic;
