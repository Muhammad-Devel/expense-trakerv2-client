import { useState } from "react";
import { register } from "../api/customers";
import Error from "./Error";

function Register() {
  const [inputValue, setInputValue] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError("");
    if (!event.target.value.includes("@")) {
      setError("Please enter a valid email address.");
    }
  };

  const handleRegister = () => {
    register(inputValue)
      .then((data) => {
        console.log("Registration successful:", data);
        // Handle successful registration (e.g., redirect, store token, etc.)
        setError("");
        setInputValue({ name: "", email: "" });
        window.location.href = "/login";
        localStorage.setItem("token", JSON.stringify(data.token));
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        setError("Registration failed. Please try again.");
      });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    handleRegister();
  };
  return (
    <div className="container mx-auto w-full h-screen flex flex-col items-center justify-center space-y-4">
      {error && <Error>{error}</Error>}
      

      <form action="" onSubmit={handleSumbit} className="min-w-68 md:min-w-96 p-4 md:p-6 rounded-md shadow-md bg-white">
        <h3 className="text-gray-500 text-2xl font-bold mb-12 text-center">
        Expense Tracker - Sign Up
      </h3>
        <div className=" flex flex-col min-w-96">
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={inputValue.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="email"
              value={inputValue.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-full bg-cyan-600 text-white text-md font-semibold hover:bg-cyan-800 mt-5 px-4 py-3"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center mt-4">
          Your have an account?
          <button
            type="button"
            className="text-cyan-800 hover:underline font-medium ml-2"
            onClick={() => {
              // Replace with navigation logic if using react-router
              window.location.href = "/login";
            }}
          >
            Login in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
