import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find(
        (u: { username: string; password: string }) =>
          u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("token", user.token);
        alert("Login successful!");
        setError("");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleUsernameBlur = () => {
    if (!username.trim()) {
      setUsernameError("Требуется ввести юзернейм.");
    } else if (username.length < 5 || username.length > 15) {
      setUsernameError("Имя пользователя должно содержать от 5 до 15 символов.");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordBlur = () => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);

    if (!password.trim()) {
      setPasswordError("Требуется ввести пароль.");
    } else if (!hasLetters || !hasNumbers) {
      setPasswordError("Пароль должен содержать как буквы, так и цифры.");
    } else { 
      setPasswordError("");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleUsernameBlur}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
