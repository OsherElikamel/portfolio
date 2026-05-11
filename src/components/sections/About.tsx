import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { personal } from '../../data/personal';

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <SectionTitle title="About Me" subtitle="Get to know me a bit better" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Avatar
              src={personal.avatarUrl}
              sx={{
                width: 220,
                height: 220,
                borderRadius: '24px',
                bgcolor: 'primary.light',
                fontSize: '4rem',
              }}
            >
              {!personal.avatarUrl && <PersonIcon sx={{ fontSize: '5rem' }} />}
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, whiteSpace: 'pre-line' }}
              >
                {personal.bio}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { label: 'Years Experience', value: personal.stats.yearsExperience },
                  { label: 'Projects Completed', value: personal.stats.projectsCompleted },
                  { label: 'Technologies', value: personal.stats.technologiesUsed },
                ].map((stat) => (
                  <Paper
                    key={stat.label}
                    elevation={0}
                    sx={{
                      px: 3,
                      py: 2,
                      borderRadius: '16px',
                      border: 1,
                      borderColor: 'divider',
                      textAlign: 'center',
                      minWidth: 130,
                    }}
                  >
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                      {stat.value}+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
