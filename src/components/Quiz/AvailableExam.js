import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Grid } from '@mui/material';

function AvailableExams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/exams', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExams(response.data);
    };

    fetchExams();
  }, []);

  return (
    <Container>
      <h2>Available Exams</h2>
      <Grid container spacing={2}>
        {exams.map(exam => (
          <Grid item key={exam.id} xs={12} md={4}>
            <Button onClick={() => alert('Start Exam')}>{exam.title}</Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AvailableExams;