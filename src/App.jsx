import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/helpers/ProtectedRoute";
import Charts from "./components/Charts";
import NoPage from "./components/NoPage";
import Info from "./components/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/analystics" element={<Charts />} />
          <Route path="/info" element={<Info />} />
          {/* <Route path="/*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
