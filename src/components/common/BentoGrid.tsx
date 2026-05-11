import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  columns?: number;
  sx?: SxProps<Theme>;
}

export default function BentoGrid({ children, columns = 3, sx }: BentoGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: `repeat(${columns}, 1fr)`,
        },
        gap: 3,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
