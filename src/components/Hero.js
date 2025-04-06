import React from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const theme = useTheme();
  const { translations, language } = useLanguageContext();

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        py: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at center, ${theme.palette.primary.main}05 0%, transparent 70%)`,
          zIndex: -1,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          {translations[language].hero.title}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            color: theme.palette.text.secondary,
            fontWeight: 600,
          }}
        >
          {translations[language].hero.subtitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {translations[language].hero.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                },
              }}
            >
              {language === 'en' ? 'Get in Touch' : 'Contactez-moi'}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              size="large"
              href="#projects"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.light,
                  background: `${theme.palette.primary.main}10`,
                },
              }}
            >
              {language === 'en' ? 'View Projects' : 'Voir les Projets'}
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Hero; 