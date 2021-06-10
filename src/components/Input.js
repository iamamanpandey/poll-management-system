import React from "react";

export default function Input({ type = "text", placeholder, value }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        class="form-control"
      />
    </div>
  );
}
