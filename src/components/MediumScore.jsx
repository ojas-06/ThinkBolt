import { Typography, Box } from '@mui/material';

export default function MediumScoreMessage({ name, score }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 8,
        p: 4,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
        color: 'white',
        boxShadow: 4,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        👍 Well Done!
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.9 }}>
        Great effort {name}! A little more practice and you’ll ace it next time.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
        Your Score: {score}
      </Typography>
    </Box>
  );
}
