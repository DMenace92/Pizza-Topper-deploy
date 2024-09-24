import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import OC from "./Pages/MainPage/OrderCompletePage.js/OrderComplete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order_complete/:id" element={<OC />} />
      </Routes>
    </div>
  );
}

export default App;
