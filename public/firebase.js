import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKp9EPhSPOc55d4GcQPmpNwfE5RWlZpkg",
  authDomain: "autobots---info1601.firebaseapp.com",
  projectId: "autobots---info1601",
  storageBucket: "autobots---info1601.appspot.com",
  messagingSenderId: "344675316997",
  appId: "1:344675316997:web:4f3c7468a392289104736c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };