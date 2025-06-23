import { Box, Button } from '@mui/material';

export default function ActionButtons({ onPlayAgain, onLeaderboard }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,         // ✅ Adds space between buttons
        mt: 4,
      }}
    >
      <Button variant="outlined" color="secondary" onClick={onLeaderboard}>
        Leaderboard
      </Button>
      <Button variant="contained" color="primary" onClick={onPlayAgain}>
        Play Again
      </Button>
    </Box>
  );
}
