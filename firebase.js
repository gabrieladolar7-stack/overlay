import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
const firebaseConfig = {
   apiKey: "AIzaSyDcqposPDuzcIdyx9qwxsmir-1j8Yv4sxA",
  authDomain: "tikfinity-overlay-e879d.firebaseapp.com",
  databaseURL: "https://tikfinity-overlay-e879d-default-rtdb.firebaseio.com",
  projectId: "tikfinity-overlay-e879d",
  storageBucket: "tikfinity-overlay-e879d.firebasestorage.app",
  messagingSenderId: "143473145353",
  appId: "1:143473145353:web:b1849585a981e84a59aad8"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, set, get, onValue };
