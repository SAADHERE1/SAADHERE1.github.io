import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVMN1e9MUsT96JPloRcvtyuu0Px0JT_MU",
  authDomain: "saad-portfolio-b572d.firebaseapp.com",
  projectId: "saad-portfolio-b572d",
  storageBucket: "saad-portfolio-b572d.firebasestorage.app",
  messagingSenderId: "966248438107",
  appId: "1:966248438107:web:afdd3fc1be054dd48b627e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
  
