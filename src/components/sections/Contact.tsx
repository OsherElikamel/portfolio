import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import BentoCard from '../common/BentoCard';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { personal } from '../../data/personal';

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        bgcolor: (t) => (t.palette.mode === 'light' ? 'secondary.main' : 'background.default'),
      }}
    >
      <Container maxWidth="sm">
        <ScrollReveal>
          <SectionTitle title="Get in Touch" subtitle="I'd love to hear from you" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <BentoCard sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: 420, mx: 'auto' }}>
              Whether you have a project idea, a question, or just want to say hello, feel free to reach out :)
              <br /><br />
              I'm always open to new opportunities and collaborations.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href={`mailto:${personal.email}`}
              sx={{ mb: 4 }}
            >
              Say Hello
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton
                href={`https://github.com/${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 300ms ease-in-out',
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href={`https://linkedin.com/in/${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 300ms ease-in-out',
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href={`mailto:${personal.email}`}
                sx={{
                  color: 'text.secondary',
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 300ms ease-in-out',
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </BentoCard>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
