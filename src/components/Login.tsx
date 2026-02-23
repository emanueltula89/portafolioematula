"use client";

import { useState } from 'react';

interface LoginProps {
  onAuthenticate: (password: string) => void;
}

const Login = ({ onAuthenticate }: LoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === '123') {
      onAuthenticate(password);
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      <div className="card shadow-lg border-0 p-5" style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem' }}>
        <div className="text-center mb-5">
          <div className="mb-3">
            <i className="bi bi-shield-lock-fill text-primary" style={{ fontSize: '3rem' }}></i>
          </div>
          <h1 className="h4 mb-2 fw-bold text-uppercase mx-auto text-title" style={{ letterSpacing: '2px' }}>Portafolio</h1>
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="form-control form-control-lg bg-dark text-white border-secondary"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ fontSize: '1rem', padding: '1rem' }}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100 mb-4 fw-bold shadow-sm"
          type="button"
          onClick={handleLogin}
          style={{ padding: '0.8rem', letterSpacing: '1px' }}
        >
          ENTRAR
        </button>

        {error && <p className="text-danger text-center small fw-bold mb-0">{error}</p>}

        <div className="text-center mt-4">
          <p className="text-muted small mb-0" style={{ fontSize: '0.75rem' }}>&copy; {new Date().getFullYear()} Ema Tula. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
