import React from 'react';
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <PsychologyIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      skills: [
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
      ],
    },
    {
      title: 'Web Development',
      icon: <WebIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      skills: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Material-UI',
        'RESTful APIs',
      ],
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      skills: [
        'Python',
        'Java',
        'Spring Boot',
        'SQL',
        'Docker',
        'AWS',
      ],
    },
    {
      title: 'Security',
      icon: <SecurityIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      skills: [
        'Penetration Testing',
        'Vulnerability Assessment',
        'Network Security',
        'Cryptography',
        'Security Protocols',
        'Risk Management',
      ],
    },
  ];

  return (
    <Container
      id="skills"
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
          Technical Skills
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
          A comprehensive overview of my technical expertise and the tools I work with
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
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
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 10px 20px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {category.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        ml: 2,
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {category.skills.map((skill, skillIndex) => (
                      <Grid item xs={6} key={skillIndex}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: theme.palette.primary.main,
                              mr: 1,
                            }}
                          />
                          <Typography variant="body2">{skill}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills; 