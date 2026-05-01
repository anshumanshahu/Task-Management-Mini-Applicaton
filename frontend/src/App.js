import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowRegister(false);
  };

  
  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div style={styles.page}>

      {/* HEADER */}
      

      {/* AUTH SECTION */}
      <div style={styles.card}>
        {showRegister ? (
          <Register onRegister={() => setShowRegister(false)} />
        ) : (
          <Login onLogin={handleLoginSuccess} />
        )}
      </div>

      {/* TOGGLE */}
      <div style={styles.toggle}>
        {!showRegister ? (
          <p onClick={() => setShowRegister(true)} style={styles.link}>
            New user? Create account
          </p>
        ) : (
          <p onClick={() => setShowRegister(false)} style={styles.link}>
            Already have an account? Login
          </p>
        )}
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        
      </div>

    </div>
  );
}

export default App;

const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#e2e8f0",
    padding: "30px",
    textAlign: "center"
  },

  header: {
    marginBottom: "20px"
  },

  brand: {
    margin: 0,
    fontSize: "26px"
  },

  sub: {
    margin: 0,
    fontSize: "12px",
    color: "#94a3b8"
  },

  card: {
    marginTop: "20px"
  },

  toggle: {
    marginTop: "15px"
  },

  link: {
    cursor: "pointer",
    color: "#38bdf8",
    fontSize: "13px"
  },

  footer: {
    marginTop: "40px",
    fontSize: "12px",
    color: "#64748b"
  }
};