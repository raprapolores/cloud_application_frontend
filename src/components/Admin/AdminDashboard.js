import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, TextField, Grid } from '@mui/material';

function AdminDashboard() {
  const [exams, setExams] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchExams = async () => {
      const response = await axios.get('http://localhost:5000/api/exams', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExams(response.data);
    };

    fetchExams();
  }, []);

  const handleCreateExam = async () => {
    await axios.post('http://localhost:5000/api/exams', { title, description }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTitle('');
    setDescription('');
    fetchExams();
  };

  const handleDeleteExam = async (id) => {
    await axios.delete(`http://localhost:5000/api/exams/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchExams();
  };

  return (
    <Container>
      <h2>Admin Dashboard</h2>
      <TextField label="Exam Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth />
      <Button onClick={handleCreateExam}>Create Exam</Button>
      <Grid container spacing={2}>
        {exams.map(exam => (
          <Grid item key={exam.id} xs={12} md={4}>
            <Button>{exam.title}</Button>
            <Button onClick={() => handleDeleteExam(exam.id)}>Delete</Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AdminDashboard;