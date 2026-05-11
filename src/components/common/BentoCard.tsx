import Paper from '@mui/material/Paper';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  span?: { cols?: number; rows?: number };
}

export default function BentoCard({ children, sx, span }: BentoCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '20px',
        gridColumn: span?.cols ? `span ${span.cols}` : undefined,
        gridRow: span?.rows ? `span ${span.rows}` : undefined,
        border: 1,
        borderColor: 'divider',
        transition: 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}
