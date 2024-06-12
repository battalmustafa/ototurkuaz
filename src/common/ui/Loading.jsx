import React from 'react';
import { LinearProgress, Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="top"
      height="100vh"
    >
      <LinearProgress />
    </Box>
  );
};

export default Loading;
