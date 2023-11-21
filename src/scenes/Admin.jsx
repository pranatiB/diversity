import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const LoginForm = () => {
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminPassword = 'admin123';
    const hrPassword = 'hr456';

    // Simulating authentication, replace this with actual authentication logic
    if (password) {
      if (userType === 'admin' && password === adminPassword) {
        setError('');
        // Redirect to admin dashboard
        navigate('/form');
      } else if (userType === 'hr' && password === hrPassword) {
        setError('');
        // Redirect to HR dashboard
        navigate('/');
      } else {
        setError('Invalid password');
      }
    } else {
      setError('Please enter password');
    }
  };

  return (
    <div>
      
      <form onSubmit={handleLogin}>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
          </select>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginForm;
