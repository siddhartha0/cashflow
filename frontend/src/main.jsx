import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/pages/DashBoard.jsx";
import Bank from "./components/pages/Bank.jsx";
import Wallet from "./components/pages/Wallet.jsx";
import Profile from "./components/pages/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashBoard />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
