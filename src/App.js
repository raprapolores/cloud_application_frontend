import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import AvailableExams from './components/Quiz/AvailableExams';
import SavedExams from './components/Quiz/SavedExams';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/exams" element={<AvailableExams />} />
          <Route path="/saved-exams" element={<SavedExams />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
