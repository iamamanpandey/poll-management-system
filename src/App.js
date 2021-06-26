import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const token = localStorage.getItem("token", token);

  return (
    <div className="App ">
      <Routes />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
