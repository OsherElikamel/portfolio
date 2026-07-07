import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BentoGrid from '../common/BentoGrid';
import BentoCard from '../common/BentoCard';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <SectionTitle title="Projects" subtitle="Some things I've built" />
        </ScrollReveal>

        <BentoGrid columns={2}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 150}>
              <BentoCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {project.image && (
                  <Box
                    component="img"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      aspectRatio: '16 / 9',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      borderRadius: '12px',
                      border: 1,
                      borderColor: 'divider',
                      mb: 2,
                    }}
                  />
                )}
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, flex: 1, lineHeight: 1.7 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {project.github && (
                    <IconButton
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      aria-label={`${project.title} on GitHub`}
                      sx={{ color: 'text.secondary' }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                  {project.live && (
                    <IconButton
                      component="a"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      aria-label={`${project.title} live demo`}
                      sx={{ color: 'text.secondary' }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  )}
                </Box>
              </BentoCard>
            </ScrollReveal>
          ))}
        </BentoGrid>
      </Container>
    </Box>
  );
}
