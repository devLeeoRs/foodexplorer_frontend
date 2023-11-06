import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { Routes } from "./Routes/index";
import { ToastContainer } from "react-toastify";
import CookieBanner from "./components/CookieBanner";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./hooks/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer />
    <CookieBanner />
  </React.StrictMode>
);
