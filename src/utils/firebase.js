import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD5UdxLXYijwugeUUohqpArBwrErP07r8",
  authDomain: "netflixgpt-b772c.firebaseapp.com",
  projectId: "netflixgpt-b772c",
  storageBucket: "netflixgpt-b772c.appspot.com",
  messagingSenderId: "716458421280",
  appId: "1:716458421280:web:e241bd5543a1f346ea2045",
  measurementId: "G-BH8FBDHV44"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);