import { Typography, Box } from '@mui/material';

export default function SuccessMsg({name,score}) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 10,
        p: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #4CAF50, #81C784)',
        color: 'white',
        boxShadow: 4,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        🎉 Quiz Champion! 🎉
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.9 }}>
        You've mastered the challenge, {name}. Great job!
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.9 }}>
        Your Score : {score}
      </Typography>
    </Box>
  );
}
