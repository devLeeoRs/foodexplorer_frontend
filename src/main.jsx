import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../src/hooks/cartUpdate";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { Routes } from "./Routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./hooks/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
