import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Tokenni o‘chir
    localStorage.removeItem("exp_token");
    localStorage.removeItem("customer");

    // Refresh qilish (state yangilanishi uchun)
    window.location.reload();

    // Bosh sahifaga qaytarish
    navigate("/login");
  }, []);

  return null;
};

export default Logout;
