import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Mechanic from "./pages/Mechanic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diagnosis from "./pages/Diagnosis";
import MechanicHome from "./pages/MechanicHome";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Book from "./pages/Book";
import {ServiceContextProvider} from '../src/context/ServiceContext';
import LocationForm from "./pages/LocationForm";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ServiceContextProvider>
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Diagnosis />} />
      <Route path="/mechanic" element={<Mechanic />} />
      <Route path="/orders" element={<MechanicHome />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book" element={<Book />} />
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
  </ServiceContextProvider>
  
  
);
