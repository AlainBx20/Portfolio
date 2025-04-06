import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About = () => {
  const theme = useTheme();
  const skills = [
    'React', 'JavaScript', 'Python', 'OpenCV', 'TensorFlow', 'PyTorch', 
    'Generative AI', 'Large Language Models (LLM)', 'Computer Vision', 
    'Deep Learning', 'Machine Learning', 'Natural Language Processing', 
    'Data Science', 'Node.js', 'HTML', 'CSS', 'MongoDB', 'Express'
  ];

  const experiences = [
    {
      icon: <WorkIcon />,
      title: 'Software Engineer',
      company: 'STB Bank',
      location: 'Tunis, Tunisia',
      period: '2023 - Present',
      description: 'Developing and maintaining banking software solutions, implementing secure financial transactions, and optimizing system performance.',
    },
    {
      icon: <WorkIcon />,
      title: 'AI & Web3 Workshop Participant',
      company: 'Dione Protocol',
      location: 'Tunis, Tunisia',
      period: '06/2024 - 07/2024',
      description: 'Focused on energy disaggregation using TensorFlow and AI models, gaining hands-on experience with Web3 technologies and AI applications.',
    },
    {
      icon: <WorkIcon />,
      title: 'Development & Networking Intern',
      company: 'Tunisair',
      location: 'Tunis, Tunisia',
      period: '07/2024 - 08/2024',
      description: 'Mastered CCNA principles and developed a website for remote Ethernet port configuration, enhancing network management capabilities.',
    },
    {
      icon: <WorkIcon />,
      title: 'Web Development Intern',
      company: 'Smart Team',
      location: 'Tunis, Tunisia',
      period: '06/2023 - 08/2023',
      description: 'Worked with modern frameworks including React, Angular, and Node.js to develop and maintain web applications, focusing on user experience and performance optimization.',
    },
  ];

  return (
    <Container
      id="about"
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
          About Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: theme.palette.background.paper,
                borderRadius: 2,
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
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                }}
              >
                Hello! I'm Alaa Ben Chouikhaa, a passionate software developer and AI specialist with a keen interest in creating elegant solutions to complex problems. I am currently pursuing my Bachelor's in Information and Communication Technology at the Faculty of Sciences of Tunis, where I've developed a strong foundation in both web development and artificial intelligence.

                With multiple diplomas in AI and extensive experience in both web development and AI, I bring a unique perspective to every project. My expertise spans across various domains including computer vision, natural language processing, and deep learning. I'm particularly fascinated by the intersection of AI and web technologies, and I'm always exploring new ways to integrate these fields.

                I've worked on diverse projects ranging from AI-powered image recognition systems to full-stack web applications. My experience includes internships at Smart Team, Tunisair, and Dione Protocol, where I've honed my skills in both development and AI implementation.

                When I'm not coding, I'm constantly learning about new technologies and methodologies in the AI space. I believe in the power of continuous learning and staying at the forefront of technological advancements.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: theme.palette.background.paper,
                borderRadius: 2,
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
                variant="h5"
                sx={{
                  mb: 3,
                  color: theme.palette.primary.main,
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CodeIcon /> Skills & Technologies
              </Typography>

              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={6} sm={4} key={skill}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          p: 2,
                          textAlign: 'center',
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
                          variant="body1"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                          }}
                        >
                          {skill}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: theme.palette.primary.main,
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <WorkIcon /> Experience
          </Typography>

          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: '12px',
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.primary.main}20`,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 8px 30px ${theme.palette.primary.main}20`,
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        {exp.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
                          {exp.company} • {exp.location} • {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        flex: 1,
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 