import React from "react";

export default function Login() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <h1>ParkEasy Login</h1>
      <input type="email" placeholder="Email" style={{ width: "90%", margin: "10px 0", padding: "10px" }} />
      <input type="password" placeholder="Password" style={{ width: "90%", margin: "10px 0", padding: "10px" }} />
      <button style={{ width: "90%", padding: "10px", background: "#2196F3", color: "#fff", border: "none", borderRadius: "8px" }}>
        Login
      </button>
    </div>
  );
}
