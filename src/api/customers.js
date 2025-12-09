import axios from "axios";
import { authConfig } from "./authConfig";

export const BASE_URL = "https://expense-trakerv2-server.onrender.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Replace with your actual base URL

export const login = async (email, password) => {
  const response = await api.post("/customers/login", { email, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post("/customers/register", userData);
  return response.data;
};

export const validateToken = async () => {
  try {
    const response = await api.get("/customers/validate", authConfig());
    return response.data;
    console.log(response.data);
    
  } catch (error) {
    console.log("Token validation error:", error);
    return { valid: false, message: "Token is invalid" };
  }
};
