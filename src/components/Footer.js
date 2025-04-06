import React from 'react';
import { Container, Typography, Box, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.primary.main}20`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <IconButton
              component={Link}
              href="https://github.com/AlainBx20"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="http://linkedin.com/in/alaa-ben-chuikhaa-216a0a257"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com/sarzfull"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:alaachuikhaa@gmail.com"
              sx={{
                color: theme.palette.text.primary,
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Alaa Ben Chouikhaa. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 