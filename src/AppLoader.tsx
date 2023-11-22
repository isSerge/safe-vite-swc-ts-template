import { Typography, CircularProgress, Box } from '@mui/material';

export const AppLoader = () => (
  <>
    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
      Waiting for Safe...
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  </>
);
