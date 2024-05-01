import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
const MechanicHome = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
const navigate=useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://miracle-project-final.vercel.app/orders/");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        

      } catch (error) {
        console.error(error);
        setError("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, [orders]);

  const handleAccept = async (id) => {
    try {
      const response = await fetch("https://miracle-project-final.vercel.app/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });
      if (!response.ok) {
        throw new Error("Failed to accept order");
      }
      const updatedOrders = await response.json();
      // setOrders(updatedOrders);
      navigate("/orders");
    } catch (error) {
      console.error(error);
      setError("Failed to accept order");
    }
  };

  return (
    <div className="main-home diagnosis">
      <h2 className="diag-title">Orders</h2>
      <div className="diag-home mechanic-home orders">
        {orders.map((order) => (
          <div key={order._id} className="card">
            <p>Name: {order.name}</p>
            <p>Phone: {order.phone}</p>
            <p>Vehicle Type: {order.vehicle}</p>
            <p>Problem: {order.problem} Star</p>
            <p>Longitude: {order.longitude}</p>
            <p>Latitude: {order.latitude}</p>
            <div style={{ display: "flex" }}>
              {!order.status ? (
                <a href={`tel:+91${order.phone}`}>
                <button
                  className="butt mech"
                  onClick={() => handleAccept(order._id)}
                >
                  Accept
                </button></a>
              ) : (
                <a href={`tel:+91${order.phone}`}>
                <button className="butt cust">Accepted</button></a>
              )}
              <button
                className="butt cust"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps?q=${order.latitude},${order.longitude}`,
                    "_blank"
                  );
                }}
              >
                Customer Location
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MechanicHome;
