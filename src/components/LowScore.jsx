import { Typography, Box } from '@mui/material';

export default function LowScoreMessage({ score, name }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 8,
        p: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #FF5722, #FF8A65)',
        color: 'white',
        boxShadow: 4,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        👏 Good Try {name}!
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.9 }}>
        Every expert was once a beginner. Keep practicing and you’ll get there!
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
        Your Score: {score}
      </Typography>
    </Box>
  );
}
