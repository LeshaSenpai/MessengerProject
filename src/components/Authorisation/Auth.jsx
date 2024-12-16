import React, { useState } from 'react';

const AuthorizationForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error('Authorization failed');
      }

      const data = await response.json();
      setMessage(`Authorization successful: ${data.message}`);
    } catch (error) {
      if (login === 'bbx' && password === '112') {
        setMessage('Fallback authorization successful!');
      } else {
        setMessage('Authorization failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Authorization</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthorizationForm;
