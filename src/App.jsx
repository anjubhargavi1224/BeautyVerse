import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./components/Firebase"; // Import Firebase Auth

import Home from "./pages/Home/Homes";
import Makeupblog from "./pages/Blog/Makeupblog";
import Dermatologyblog from "./pages/Blog/Dermatologyblog";
import Skincareblog from "./pages/Blog/Skincareblog";
import Questionnaire from "./pages/Questionnaire/Questionnaire";

import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Profile from "./pages/Login/Profile"
import Signinwithgoogle from "./pages/Login/Signinwithgoogle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  return (
    <Router>
           <Header/>
      <Navbar user={user} /> {/* Pass user state to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<Skincareblog />} />
        <Route path="/makeup" element={<Makeupblog />} />
        <Route path="/dermatologist" element={<Dermatologyblog />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/signinwithgoogle" element={<Signinwithgoogle/>} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
