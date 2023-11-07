import { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "./alertNotification";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

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

  async function updateProfile({ user, avatarFile }) {
    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("upload", avatarFile);

      const response = await api.patch("/upload/userAvatar", fileUploadForm);
      user.avatar = response.data.avatar_url;
    }

    try {
      await api.put("/users", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });

      alertNotification("Perfil atualizado", "success");
    } catch (error) {
      if (error.response) {
        alertNotification(error.response.data.message, "error");
      } else {
        alertNotification("Não foi possivel atualizar o perfil", "error");
      }
    }
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
      value={{
        signIn,
        signOut,
        updateCart,
        updateProfile,
        cartQtd,
        user: data.user,
      }}
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
