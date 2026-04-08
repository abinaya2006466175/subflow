import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SubscriptionProvider>
      <ToastProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToastProvider>
    </SubscriptionProvider>
  </React.StrictMode>
);