import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import { personal } from '../../data/personal';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (t) =>
          t.palette.mode === 'light'
            ? 'linear-gradient(135deg, #FFFDF9 0%, #F5F0E8 50%, #E8DDD0 100%)'
            : 'linear-gradient(135deg, #1A1210 0%, #2C1E16 50%, #1A1210 100%)',
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={800}>
          <Box>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 500, letterSpacing: 1 }}
            >
              Hello, I'm
            </Typography>
          </Box>
        </Fade>
        <Fade in timeout={1000}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                mb: 2,
              }}
            >
              {personal.name}
            </Typography>
          </Box>
        </Fade>
        <Fade in timeout={1200}>
          <Box>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                mb: 4,
                fontWeight: 400,
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              }}
            >
              {personal.tagline}
            </Typography>
          </Box>
        </Fade>
        <Fade in timeout={1400}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" size="large" href="#projects">
              View Projects
            </Button>
            <Button variant="outlined" size="large" href="#contact">
              Get in Touch
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
