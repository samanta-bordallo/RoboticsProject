import React, { useState } from 'react';
import '../styles.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de login
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <section className="page-section" id="loginform">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nome:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;