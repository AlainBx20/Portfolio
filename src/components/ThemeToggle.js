import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();

  return (
    <Tooltip title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: theme.palette.primary.main,
          '&:hover': {
            background: theme.palette.primary.main + '20',
          },
        }}
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 