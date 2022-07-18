import React, { Fragment } from "react";
import "./App.css";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <Fragment>
      <div className="container">
        <OrderHistory />
      </div>
    </Fragment>
  );
}

export default App;
