import React, { useEffect, useState } from "react";
import { auth, db } from "../../components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use navigate for smooth navigation

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("User document not found.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("No user is logged in.");
        navigate("/login"); // Redirect to login if user is not authenticated
      }
      setLoading(false); // Stop loading after fetching user data
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/login"); // Smooth navigation without full page reload
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              alt="Profile"
              width="40%"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome, {userDetails.firstName}! 🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default Profile;
