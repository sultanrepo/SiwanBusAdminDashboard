import { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = "true"; //localStorage.getItem("isAuthenticated");
    const userRole = "admin"; //localStorage.getItem("userRole");

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (userRole !== "admin") {
        return <Navigate to="/unauthrized" replace />;
    }
    return children;
}

export default ProtectedRoute;