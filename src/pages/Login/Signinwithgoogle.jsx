import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../components/Firebase";
import { toast } from "react-toastify";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import google from "../../assets/google.png";

function Signinwithgoogle() {
  const navigate = useNavigate();

  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-in Successful:", user);

      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        // If user does not exist, create a new Firestore document
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            email: user.email,
            firstName: user.displayName || "User",
            lastName: "",
            photo: user.photoURL || "",
          });
        }

        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      }
    } catch (error) {
      // Log the entire error object for detailed debugging
      console.error("Google Sign-in Error:", error);
      toast.error("Google Sign-in Failed. Please try again.", {
        position: "bottom-center",
      });
    }
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
       <img src={google} alt="Google Sign-in" width="30%" />;
      </div>
    </div>
  );
}

export default Signinwithgoogle;
