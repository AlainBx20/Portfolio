import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, CardActions, Button, Chip, Tabs, Tab, IconButton, Tooltip, Fade } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SwipeIcon from '@mui/icons-material/Swipe';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useLanguageContext } from '../context/LanguageContext';

const projects = {
  ai: [
    {
      title: 'Ecology Simulation (AI-Agent)',
      description: 'An advanced ecological simulation system that models complex interactions between different species in an ecosystem. The project uses AI agents to simulate realistic behaviors and environmental impacts, providing valuable insights into ecological dynamics.',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['Python', 'AI', 'Simulation', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/AlainBx20/Ecology-Simulation',
      live: 'https://github.com/AlainBx20/Ecology-Simulation',
      category: 'AI & Machine Learning',
    },
    {
      title: 'AI-Maze Using Reinforcement-Learning',
      description: 'A sophisticated maze-solving AI that uses reinforcement learning algorithms to navigate complex environments. The system demonstrates advanced pathfinding capabilities and adaptive learning behaviors.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['Python', 'Reinforcement Learning', 'AI', 'Machine Learning', 'Pathfinding'],
      github: 'https://github.com/AlainBx20/AI-Maze',
      live: 'https://github.com/AlainBx20/AI-Maze',
      category: 'AI & Machine Learning',
    },
    {
      title: 'Lung Disease Classification',
      description: 'A deep learning-based system for automated classification of lung diseases from medical imaging data. The project demonstrates expertise in computer vision and medical AI applications.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Medical AI', 'TensorFlow'],
      github: 'https://github.com/AlainBx20/Lung-Disease-Classification',
      live: 'https://github.com/AlainBx20/Lung-Disease-Classification',
      category: 'AI & Machine Learning',
    },
  ],
  web: [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and Material-UI, featuring smooth animations and a clean design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80',
      technologies: ['React', 'Material-UI', 'JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/AlainBx20/Alaa19.github.io',
      live: 'https://alainbx20.github.io/Alaa19.github.io/',
      category: 'Web Development',
    },
  ],
};

const Projects = () => {
  const theme = useTheme();
  const { translations, language } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    setCurrentIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  };

  const allProjects = [...projects.ai, ...projects.web];

  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => 
        selectedCategory === 'ai' ? projects.ai.includes(project) : projects.web.includes(project)
      );

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const cardWidth = 300;
      const gap = 12;
      const scrollAmount = cardWidth + gap;
      const newPosition = index * scrollAmount;
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
        duration: 100
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <Container
      id="projects"
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
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
          {translations[language].projects.title}
        </Typography>
      </motion.div>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.primary.main,
              height: '3px',
              borderRadius: '2px',
            },
          }}
        >
          <Tab 
            value="all" 
            label={translations[language].projects.categories.all}
            icon={<CodeIcon />}
            sx={{ 
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
              },
            }}
          />
          <Tab 
            value="ai" 
            label={translations[language].projects.categories.ai}
            icon={<PsychologyIcon />}
            sx={{ 
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
              },
            }}
          />
          <Tab 
            value="web" 
            label={translations[language].projects.categories.web}
            icon={<WebIcon />}
            sx={{ 
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
              },
            }}
          />
        </Tabs>
      </Box>

      <Box 
        sx={{ position: 'relative' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <IconButton
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: theme.palette.primary.main,
                  zIndex: 1,
                  background: `${theme.palette.background.paper}80`,
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    background: theme.palette.background.paper,
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&.Mui-disabled': {
                    color: theme.palette.text.disabled,
                  },
                }}
              >
                <KeyboardArrowLeftIcon fontSize="large" />
              </IconButton>

              <IconButton
                onClick={handleNext}
                disabled={currentIndex >= filteredProjects.length - 1}
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: theme.palette.primary.main,
                  zIndex: 1,
                  background: `${theme.palette.background.paper}80`,
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    background: theme.palette.background.paper,
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                  '&.Mui-disabled': {
                    color: theme.palette.text.disabled,
                  },
                }}
              >
                <KeyboardArrowRightIcon fontSize="large" />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>

        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            py: 2,
            px: 1,
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&:hover': {
              '&::-webkit-scrollbar': {
                display: 'block',
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: theme.palette.background.paper,
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme.palette.primary.main,
                borderRadius: '3px',
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ minWidth: '300px', flexShrink: 0 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 100%)`,
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 1.5,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: `${theme.palette.primary.main}20`,
                          color: theme.palette.primary.main,
                          '&:hover': {
                            background: `${theme.palette.primary.main}30`,
                          },
                          fontSize: '0.75rem',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 1.5, pt: 0 }}>
                  <Tooltip title={translations[language].projects.viewCode} arrow TransitionComponent={Fade}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.main,
                        '&:hover': {
                          background: `${theme.palette.primary.main}10`,
                        },
                        fontSize: '0.75rem',
                      }}
                    >
                      {translations[language].projects.viewCode}
                    </Button>
                  </Tooltip>
                  <Tooltip title={translations[language].projects.liveDemo} arrow TransitionComponent={Fade}>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.main,
                        '&:hover': {
                          background: `${theme.palette.primary.main}10`,
                        },
                        fontSize: '0.75rem',
                      }}
                    >
                      {translations[language].projects.liveDemo}
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Box>

        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                position: 'relative',
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  background: `${theme.palette.background.paper}80`,
                  backdropFilter: 'blur(4px)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: `1px solid ${theme.palette.primary.main}30`,
                }}
              >
                <SwipeIcon sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                  {translations[language].projects.navigate}
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Container>
  );
};

export default Projects; 