import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Snackbar, Alert, Grid, Paper, Tooltip, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const theme = useTheme();
  const { translations, language } = useLanguageContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: translations[language].contact.success,
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: translations[language].contact.error,
        severity: 'error',
      });
    }
  };

  return (
    <Container
      id="contact"
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            mb: 4,
            textAlign: 'center',
            fontSize: '2.5rem',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: theme.palette.primary.main,
              borderRadius: '2px',
            },
          }}
        >
          Get In Touch With Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        <Grid xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.primary.main}30`,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  transform: 'translateY(-5px)',
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}20`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 2,
                  fontSize: '1.75rem',
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 4,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                I'm available for freelance projects, consulting, and full-time opportunities. Whether you need a complete solution or assistance with a specific aspect of your project, I'm here to help.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Tooltip title="Click to copy email" arrow TransitionComponent={Fade}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 1,
                      background: `${theme.palette.primary.main}10`,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${theme.palette.primary.main}20`,
                        transform: 'translateX(5px)',
                      },
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText('alaachuikhaa@gmail.com');
                      setSnackbar({
                        open: true,
                        message: 'Email copied to clipboard!',
                        severity: 'success',
                      });
                    }}
                  >
                    <EmailIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                      alaachuikhaa@gmail.com
                    </Typography>
                  </Box>
                </Tooltip>

                <Tooltip title="Click to copy phone number" arrow TransitionComponent={Fade}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 1,
                      background: `${theme.palette.primary.main}10`,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${theme.palette.primary.main}20`,
                        transform: 'translateX(5px)',
                      },
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText('+216 27 003 338');
                      setSnackbar({
                        open: true,
                        message: 'Phone number copied to clipboard!',
                        severity: 'success',
                      });
                    }}
                  >
                    <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                    <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                      +216 27 003 338
                    </Typography>
                  </Box>
                </Tooltip>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 1,
                    background: `${theme.palette.primary.main}10`,
                  }}
                >
                  <LocationOnIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                    Tunis, Tunisia
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Tooltip title="Send me an email" arrow TransitionComponent={Fade}>
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:alaachuikhaa@gmail.com"
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Email Me
                  </Button>
                </Tooltip>

                <Tooltip title="Visit my LinkedIn profile" arrow TransitionComponent={Fade}>
                  <Button
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/alaa-ben-chouikhaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.light,
                        background: `${theme.palette.primary.main}10`,
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    LinkedIn
                  </Button>
                </Tooltip>

                <Tooltip title="Visit my GitHub profile" arrow TransitionComponent={Fade}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/alaa-ben-chouikhaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.light,
                        background: `${theme.palette.primary.main}10`,
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    GitHub
                  </Button>
                </Tooltip>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid xs={12} md={6.5}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                borderRadius: 2,
                background: theme.palette.background.paper,
                border: `2px solid ${theme.palette.primary.main}`,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  transform: 'translateY(-5px)',
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}20`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 2,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '3px',
                      background: theme.palette.primary.main,
                      borderRadius: '2px',
                    },
                  }}
                >
                  Contact Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: '600px',
                    mx: 'auto',
                    mb: 4,
                  }}
                >
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </Typography>
              </Box>
              <TextField
                required
                fullWidth
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${theme.palette.primary.main}30`,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <TextField
                required
                fullWidth
                name="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${theme.palette.primary.main}30`,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${theme.palette.primary.main}30`,
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    transform: 'scale(1.02)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message
              </Button>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 