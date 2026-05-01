import { useState } from "react";
import { loginUser } from "../api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });

      if (res.token) {
        localStorage.setItem("token", res.token);
        alert("Login successful");

        if (onLogin) onLogin();
      } else {
        alert(res.msg || "Login failed");
      }

    } catch (err) {
      alert("Error logging in");
    }
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.brand}>PrimeTrade.ai</h1>
        <p style={styles.sub}>Backend Developer Intern Assessment</p>
      </div>

      {/* LOGIN BOX */}
      <div style={styles.box}>
        <h2 style={styles.title}>Login to Dashboard</h2>

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

        <button style={styles.btn} onClick={handleLogin}>
          LOGIN
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
    background: "#16a34a",
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