import React from "react";
import { useState } from "react";
import { login } from "../api/customers";
import AnimateElement from "./helpers/AnimateElement";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    login(inputValue)
      .then((data) => {
        console.log("Login successful:", data);
        // Handle successful login (e.g., redirect, store token, etc.)
        localStorage.setItem("exp_token", data.token);
        setError("");
        setInputValue("");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError("Login failed. Please check your email and try again.");
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError("");
    if (!event.target.value.includes("@")) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <div className="container mx-auto w-full h-screen flex flex-col items-center justify-center space-y-4">
      
      <form action="" onSubmit={handleSumbit} className="min-w-68 md:min-w-96 p-4 md:p-6 rounded-md shadow-md bg-white">
        <h3 className="text-gray-500 text-2xl font-bold mb-12 text-center">
        Expense Tracker - Login
      </h3>
        <div className=" flex flex-col space-y-4 min-w-full mb-4 ">
          <div className="input-container">
            <input
              type="text"
              id="myInput"
              value={inputValue}
              onChange={handleChange}
              required
            />
            <label htmlFor="myInput">Your Email</label>
            <AnimateElement>
              {error && (
                <div className="tooltip-container">
                  <span className="tooltip-content">{error}</span>
                </div>
              )}
            </AnimateElement>
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-full bg-cyan-600 text-white text-md font-semibold hover:bg-cyan-800 px-4 py-3"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-center mt-4">
          Don't have an account?
          <button
            type="button"
            className="text-cyan-800 hover:underline font-medium ml-2"
            onClick={() => {
              // Replace with navigation logic if using react-router
              window.location.href = "/register";
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
