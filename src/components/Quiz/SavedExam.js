import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Grid } from '@mui/material';

function SavedExams() {
  const [savedExams, setSavedExams] = useState([]);

  useEffect(() => {
    const fetchSavedExams = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/saved-exams', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSavedExams(response.data);
    };

    fetchSavedExams();
  }, []);

  return (
    <Container>
      <h2>Saved Exams</h2>
      <Grid container spacing={2}>
        {savedExams.map(exam => (
          <Grid item key={exam.id} xs={12} md={4}>
            <Button>{exam.title}</Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SavedExams;