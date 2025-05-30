import React, { useState } from "react";
import styles from "./Admin.module.css";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import baseUrl from "../baserUrl";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = credentials;
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/api/v1/admin/loginadmin`, {
        email,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        navigate("/admin");
      }
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Try again.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          className={styles.input}
        />

        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className={styles.input}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
