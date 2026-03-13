import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login successful  Home 
    navigate("/home");
  };

  return (
    <div className="main-container">
      {/* Title */}
      <h1 className="title">Super App</h1>
      <p className="subtitle">Backoffice Dashboard</p>

      {/* Login Card */}
      <div className="login-card">
        <h2>Welcome Back</h2>

        <label>Username or Email</label>
        <input type="text" placeholder="Enter your username" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="credentials">
          Default credentials: admin / admin123
        </p>
      </div>

      {/* Footer */}
      <p className="footer">
        © 2025 Super App. All rights reserved.
      </p>
    </div>
  );
}

export default Login;
