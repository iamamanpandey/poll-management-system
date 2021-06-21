import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

const Loading = () => {
  const [count, setcount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((count) => --count);
    },1000);
    //redirect once count is equal to zero
    count === 0 && history.push("/");
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="container p-5 text-center">
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default Loading;
