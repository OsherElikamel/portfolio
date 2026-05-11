import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import CommitIcon from '@mui/icons-material/Commit';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import BentoCard from '../common/BentoCard';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { useGitHubActivity } from '../../hooks/useGitHubActivity';
import { personal } from '../../data/personal';

export default function GitHubActivity() {
  const { events, loading, error } = useGitHubActivity(personal.github);

  if (!personal.github) return null;

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        bgcolor: (t) => (t.palette.mode === 'light' ? 'secondary.main' : 'background.default'),
      }}
    >
      <Container maxWidth="md">
        <ScrollReveal>
          <SectionTitle title="GitHub Activity" subtitle="What I've been up to lately" />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <BentoCard>
            {loading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress color="primary" />
              </Box>
            )}

            {error && (
              <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                Couldn't load GitHub activity right now.
              </Typography>
            )}

            {!loading && !error && events.length > 0 && (
              <List disablePadding>
                {events.map((event) => (
                  <ListItem key={event.id} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CommitIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={event.text}
                      secondary={event.date}
                      slotProps={{ primary: { sx: { fontSize: '0.95rem' } } }}
                    />
                  </ListItem>
                ))}
              </List>
            )}

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                startIcon={<GitHubIcon />}
                href={`https://github.com/${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
              >
                View Full Profile
              </Button>
            </Box>
          </BentoCard>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
