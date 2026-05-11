import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <Box ref={ref}>
      <Fade in={isVisible} timeout={800} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
        <Box>{children}</Box>
      </Fade>
    </Box>
  );
}
