import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateToken } from "../../api/customers";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const valid = await validateToken(); // tokenni tekshiryapti
        localStorage.setItem('customer', JSON.stringify(valid.customer))
        
        if (valid) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    check();
  }, []);

  if (loading) return <div className="absolute t-[50%] l-[50%]">Checking authorization...</div>;

  return isAuth ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute;
