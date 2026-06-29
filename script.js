import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful: " + userCredential.user.email);
  } catch (error) {
    alert(error.message);
  }
};
