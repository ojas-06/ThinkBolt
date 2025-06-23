import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Typography variant="h1" color="primary" fontWeight="bold" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={3}>
        Sorry, the page you are looking for doesn't exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Box>
  );
}