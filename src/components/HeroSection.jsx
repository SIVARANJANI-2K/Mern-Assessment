import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeroSection() {
    const navigate=useNavigate();
  return (
    <div
      className="bg-dark text-white text-center py-5"
      style={{
        backgroundImage: `url('/photos/banner.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded">
        <h1 className="display-4">Welcome to Our Restaurant</h1>
        <p className="lead">Delicious food, cozy ambiance.</p>
        <button className="btn btn-warning btn-lg" onClick={()=>navigate("/signUp")}>Are you new ? Sign Up</button>
      </div>
    </div>
  );
}
