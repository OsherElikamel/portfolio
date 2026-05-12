import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { personal } from '../../data/personal';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {personal.name}. Built with React & MUI.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: 'text.secondary' }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              href={`https://linkedin.com/in/${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: 'text.secondary' }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              href={`mailto:${personal.email}?subject=Hi%20Osher!&body=Hey%20Osher,%0A%0A`}
              aria-label="Email"
              sx={{ color: 'text.secondary' }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
