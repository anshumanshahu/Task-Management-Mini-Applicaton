import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const data = await getTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async () => {
    if (!title) return alert("Title required");

    await createTask(token, { title, description });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(token, id);
    fetchTasks();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={styles.page}>

      {/* TOP BAR */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.brand}>PrimeTrade.ai</h1>
          <p style={styles.sub}>Backend Developer Intern Dashboard</p>
        </div>

        <button style={styles.logout} onClick={handleLogout}>
          LOGOUT
        </button>
      </div>

      {/* CREATE TASK */}
      <div style={styles.card}>
        <h3 style={styles.title}>Create Task</h3>

        <input
          style={styles.input}
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button style={styles.btn} onClick={handleCreate}>
          ADD TASK
        </button>
      </div>

      {/* TASK LIST */}
      <div style={styles.listBox}>
        <h3 style={styles.title}>Your Tasks</h3>

        {tasks.length === 0 ? (
          <p style={{ color: "#94a3b8" }}>No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} style={styles.taskCard}>
              <div>
                <b>{task.title}</b>
                <p style={styles.desc}>{task.description}</p>
              </div>

              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(task.id)}
              >
                DELETE
              </button>
            </div>
          ))
        )}
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
    minHeight: "100vh",
    color: "#e2e8f0",
    padding: "30px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  brand: {
    margin: 0,
    fontSize: "24px"
  },

  sub: {
    margin: 0,
    fontSize: "12px",
    color: "#94a3b8"
  },

  logout: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer"
  },

  card: {
    background: "#111827",
    padding: "20px",
    border: "1px solid #1f2937",
    marginBottom: "20px"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    background: "#0b1220",
    border: "1px solid #334155",
    color: "white",
    outline: "none"
  },

  btn: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  },

  listBox: {
    background: "#111827",
    padding: "20px",
    border: "1px solid #1f2937"
  },

  taskCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #1f2937"
  },

  desc: {
    margin: 0,
    fontSize: "12px",
    color: "#94a3b8"
  },

  deleteBtn: {
    background: "#ef4444",
    border: "none",
    color: "white",
    padding: "6px 10px",
    cursor: "pointer"
  },

  title: {
    marginBottom: "10px"
  },

  footer: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "12px",
    color: "#64748b"
  }
};