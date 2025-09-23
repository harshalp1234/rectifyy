// api.js
import axios from "axios";

// Create API instance
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
