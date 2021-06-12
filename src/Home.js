import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.user);

  console.log("usrrr", user);
  return <h2 className="mx-auto">homep page ,{user}</h2>;
};
export default Home;
