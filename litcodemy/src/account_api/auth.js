import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/account",
});

// Automatically attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
