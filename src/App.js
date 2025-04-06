import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import GitHubContributions from './components/GitHubContributions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import StaticChat from './components/StaticChat';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#9effeb',
      dark: '#3dccb7',
    },
    secondary: {
      main: '#ff64da',
      light: '#ff9eeb',
      dark: '#cc3db7',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        {({ mode }) => (
          <ThemeProvider theme={{ palette: { mode } }}>
            <LanguageProvider>
              <CssBaseline />
              <StaticChat />
              <Navbar />
              <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000, display: 'flex', gap: 1 }}>
                <ThemeToggle />
                <LanguageToggle />
              </Box>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Skills />
                      <Projects />
                      <Testimonials />
                      <GitHubContributions />
                      <Contact />
                    </>
                  }
                />
              </Routes>
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        )}
      </CustomThemeProvider>
    </Router>
  );
}

export default App; 