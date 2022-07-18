import React, { Fragment, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//components
import Home from "./components/Home";
import OrderHistory from "./components/OrderHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
