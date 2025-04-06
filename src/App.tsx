import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 