import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth";

export const ProtectedRoute = ({ children }) => {
  if (isLoggedIn()) {
    console.log(children);
    return children;
  } else {
    console.log("else call");
    return <Navigate to="/" />;
  }
};
