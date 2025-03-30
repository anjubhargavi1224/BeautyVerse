import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../components/Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Signinwithgoogle from "./Signinwithgoogle"; // Ensure correct capitalization

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate instead of window.location.href

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in Successfully!", { position: "top-center" });
      navigate("/profile"); // Smooth navigation without page reload
    } catch (error) {
      console.error("Login Error:", error.message);
      handleAuthError(error);
    }
  };

  // Function to handle Firebase Authentication Errors
  const handleAuthError = (error) => {
    let errorMessage = "Login failed. Please try again.";

    if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email format. Please check your email.";
    } else if (error.code === "auth/user-not-found") {
      errorMessage = "No account found with this email.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "Incorrect password. Please try again.";
    }

    toast.error(errorMessage, { position: "bottom-center" });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

      <p className="forgot-password text-right">
        New user? <a href="/register">Register Here</a>
      </p>

      <Signinwithgoogle /> {/* Ensure correct capitalization */}
    </form>
  );
}

export default Login;
