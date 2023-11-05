import { BrowserRouter } from "react-router-dom";
import { CustomerRoute } from "./customer.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "../Routes/auth.routes";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    console.log("entrou aqui ");
    api.get("/users/validated").catch((error) => {
      if (error.response?.status === 401) {
        signOut();
      }
    });
  }, []);

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoute />;
      default:
        return <CustomerRoute />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
