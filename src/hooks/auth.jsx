import { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "./alertNotification";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const alertNotification = useAlert();
  const [data, setData] = useState({});
  const [cartQtd, setCartQtd] = useState(0);

  function updateCart() {
    const cartOrder =
      JSON.parse(localStorage.getItem("@food-explorer:cart")) || [];
    setCartQtd(cartOrder.length);
  }

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
    <AuthContext.Provider
      value={{ signIn, signOut, updateCart, cartQtd, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
