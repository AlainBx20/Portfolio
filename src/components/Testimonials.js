import React from 'react';
import { Container, Typography, Box, Grid, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CTO at TechCorp',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      text: 'Alaa delivered exceptional results on our AI project. His expertise in machine learning and attention to detail were invaluable.',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager at InnovateX',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'Working with Alaa was a pleasure. He not only met but exceeded our expectations in developing our web application.',
    },
    {
      name: 'Mike Johnson',
      role: 'Security Lead at SecureTech',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'Alaa\'s security expertise helped us identify and fix critical vulnerabilities in our system. Highly recommended!',
    },
  ];

  return (
    <Container
      id="testimonials"
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
          Client Testimonials
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
          What clients say about working with me
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '12px',
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.primary.main}20`,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 20px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      opacity: 0.1,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontStyle: 'italic',
                    }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        border: `2px solid ${theme.palette.primary.main}`,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Testimonials; 