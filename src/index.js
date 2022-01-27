import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SFSUTradeMart from "./screens/SFSUTradeMart";
import ReactMarket from "./screens/ReactMarket";
import HealthPlanner from "./screens/HealthPlanner";
import ActionRPG from "./screens/ActionRPG";
import Navbar from "./components/navbar";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="sfsuTradeMart" element={<SFSUTradeMart />} />
      <Route path="reactMarket" element={<ReactMarket />} />
      <Route path="healthPlanner" element={<HealthPlanner />} />
      <Route path="actionRPG" element={<ActionRPG />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
