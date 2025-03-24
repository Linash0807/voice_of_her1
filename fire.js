// fire.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, child, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3EBbL0Q4R14-xcwddKCrqhspzReO3mQQ",
  authDomain: "voice-of-women-a59a8.firebaseapp.com",
  projectId: "voice-of-women-a59a8",
  storageBucket: "voice-of-women-a59a8.firebasestorage.app",
  messagingSenderId: "333204071162",
  appId: "1:333204071162:web:0f6f2c6c244b3b55139f43",
  measurementId: "G-CT5VGSKFTF",
  databaseURL: "https://voice-of-women-a59a8-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add user to Firebase
export function addUser(Aadhar, password) {
  set(ref(database, "users/" + Aadhar), {
    password: password,
  })
    .then(() => {
        alert("✅ Login Successful!");
          window.location.href = "login.html";
      console.log("User added successfully!");
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
}


async function validateLogin(address, password) {
    try {
      const dbRef = ref(database);
      const userSnap = await get(child(dbRef, `users/${address}`)); // ✅ Check if user exists
  
      if (userSnap.exists()) {
        const userData = userSnap.val(); // ✅ Use .val() instead of .data()
  
        if (userData.password === password) {
          alert("✅ Login Successful!");
          window.location.href = "dashboard.html"; // ✅ Redirect after successful login
        } else {
          alert("❌ Incorrect password!");
        }
      } else {
        alert("❌ Number not found! Please register.");
      }
    } catch (error) {
      console.error("⚠ Login Error:", error);
      alert("⚠ An error occurred. Please try again later.");
    }
  }
  
  // ✅ Export the function so it can be used in Login.html
  export { validateLogin };