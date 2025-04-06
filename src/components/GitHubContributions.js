import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const GitHubContributions = () => {
  const theme = useTheme();

  return (
    <Container
      id="github"
      maxWidth="lg"
      sx={{
        py: 8,
        position: 'relative',
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 1,
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        >
          GitHub Contributions
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          My coding activity and contributions
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <img
            src="https://ghchart.rshah.org/alainbx20"
            alt="Alaa's GitHub Contributions"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <motion.a
            href="https://github.com/alainbx20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: '8px',
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.primary.main}20`,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                View GitHub Profile
              </Typography>
            </Box>
          </motion.a>
        </Box>
      </motion.div>
    </Container>
  );
};

export default GitHubContributions; 