import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.background.default,
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Alaa Ben Chouikhaa
              </Typography>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                height: '2px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 