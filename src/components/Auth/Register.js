import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = async () => {
      try {
        await axios.post('http://localhost:5000/api/register', { username, email, password, role: 'user' });
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Container>
        <h2>Register</h2>
        <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
        <Button onClick={handleRegister} fullWidth>Register</Button>
      </Container>
    );
  }

export default Register;