import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);
  const { translations, language } = useLanguageContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: translations[language].about.title },
    { id: 'skills', label: translations[language].skills.title },
    { id: 'projects', label: translations[language].projects.title },
    { id: 'contact', label: translations[language].contact.title },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          key={item.id}
          component="a"
          href={`#${item.id}`}
          onClick={handleDrawerToggle}
          sx={{
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
      <ListItem>
        <LanguageToggle />
      </ListItem>
    </List>
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? `${theme.palette.background.paper}dd`
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? `0 4px 20px ${theme.palette.primary.main}20` : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            ALAABX
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LanguageToggle />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.primary.main }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    background: theme.palette.background.paper,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    href={`#${item.id}`}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <LanguageToggle />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 