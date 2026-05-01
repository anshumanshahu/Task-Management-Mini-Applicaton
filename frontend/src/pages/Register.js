import { useState } from "react";
import { registerUser } from "../api";

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        alert("All fields required");
        return;
      }

      const res = await registerUser({ name, email, password });

      if (res.id) {
        alert("Register successful");
        if (onRegister) onRegister();
      } else {
        alert(res.msg || "Registration failed");
      }

    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.brand}>PrimeTrade.ai</h1>
        <p style={styles.sub}>Backend Developer Intern Assessment</p>
      </div>

      {/* FORM */}
      <div style={styles.box}>
        <h2 style={styles.title}>Create Account</h2>

        <input
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleRegister}>
          REGISTER
        </button>

      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0f172a",
    color: "#e2e8f0",
    minHeight: "100vh",
    padding: "40px"
  },

  header: {
    textAlign: "center",
    marginBottom: "30px"
  },

  brand: {
    margin: 0,
    fontSize: "28px",
    letterSpacing: "1px"
  },

  sub: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#94a3b8"
  },

  box: {
    width: "320px",
    margin: "auto",
    background: "#111827",
    padding: "25px",
    border: "1px solid #1f2937"
  },

  title: {
    marginBottom: "15px",
    fontSize: "18px"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#fff",
    outline: "none"
  },

  btn: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    letterSpacing: "1px"
  },

  link: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#94a3b8",
    textAlign: "center"
  },

  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "12px",
    color: "#64748b"
  }
};