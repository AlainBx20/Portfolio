import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useLanguageContext } from '../context/LanguageContext';
import TranslateIcon from '@mui/icons-material/Translate';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <Tooltip title={language === 'en' ? 'Switch to French' : 'Passer en anglais'}>
      <IconButton
        onClick={toggleLanguage}
        sx={{
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'background.paper',
          },
        }}
      >
        <TranslateIcon />
      </IconButton>
    </Tooltip>
  );
};

export default LanguageToggle; 