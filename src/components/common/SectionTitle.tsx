import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      <Typography variant="h3" component="h2" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
