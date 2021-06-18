import React from "react";

export default function Button(props) {
  const { children, onClick, value } = props;

  return (
    <button
      className="btn btn-success"
      onClick={onClick}
      {...props}
      value={value}
    >
      {children}
    </button>
  );
}
