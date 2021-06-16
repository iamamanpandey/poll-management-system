import React,{useEffect} from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import {useHistory} from 'react-router-dom';


function App() {
  const token = localStorage.getItem("token", token);
  let history = useHistory();

  useEffect(() => {
    if (!token)  history.push('/login')

  }, [token]);

  return (
    <div className="App ">
      <Routes />
    </div>
  );
}

export default App;
