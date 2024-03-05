import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./_global.css";
import { EmployeeContextProvider } from "./contexts/EmployeeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
  </React.StrictMode>
);
