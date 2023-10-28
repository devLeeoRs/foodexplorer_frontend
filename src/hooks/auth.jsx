import { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "./alertNotification";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const alertNotification = useAlert();
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      );
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      setData({ user });
      alertNotification(`Bem vindo(a) ${user.name}`);
    } catch (error) {
      alertNotification("Email /ou senha invalidos", "error");
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
