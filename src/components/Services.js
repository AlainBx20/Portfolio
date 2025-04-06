import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const services = [
  {
    icon: <PsychologyIcon />,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions including machine learning models, neural networks, and predictive analytics for your business needs.',
    features: [
      'Custom AI Model Development',
      'Data Analysis & Visualization',
      'Predictive Analytics',
      'Natural Language Processing',
    ],
  },
  {
    icon: <CodeIcon />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies and best practices.',
    features: [
      'Full Stack Development',
      'React & Node.js Applications',
      'RESTful API Development',
      'Database Design & Optimization',
    ],
  },
  {
    icon: <DataObjectIcon />,
    title: 'Backend Development',
    description: 'Robust backend systems with secure APIs and efficient database management.',
    features: [
      'API Development',
      'Database Design',
      'System Architecture',
      'Performance Optimization',
    ],
  },
  {
    icon: <SecurityIcon />,
    title: 'Security Solutions',
    description: 'Comprehensive security implementations and best practices for your applications.',
    features: [
      'Security Audits',
      'Encryption Implementation',
      'Authentication Systems',
      'Data Protection',
    ],
  },
];

const ServiceCard = ({ service }) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          height: '100%',
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.primary.main}20`,
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 8px 30px ${theme.palette.primary.main}20`,
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            {service.icon}
            <Typography
              variant="h5"
              sx={{
                ml: 1,
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {service.title}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
              minHeight: '60px',
            }}
          >
            {service.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            {service.features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main,
                    mr: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.primary }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const theme = useTheme();

  return (
    <Container
      id="services"
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
          Services I Offer
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
          Comprehensive solutions tailored to your specific needs
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Services; 