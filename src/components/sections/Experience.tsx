import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <ScrollReveal>
          <SectionTitle title="Experience" subtitle="My professional journey" />
        </ScrollReveal>

        <Timeline position="alternate">
          {experience.map((exp, i) => (
            <TimelineItem key={exp.company + exp.period}>
              <TimelineOppositeContent
                sx={{
                  m: 'auto 0',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <ScrollReveal delay={i * 200}>
                  <Typography variant="body2" color="text.secondary">
                    {exp.period}
                  </Typography>
                </ScrollReveal>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: 2 }}>
                <ScrollReveal delay={i * 200 + 100}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: '20px',
                      border: 1,
                      borderColor: 'divider',
                      textAlign: 'left',
                    }}
                  >
                    <Typography variant="h6">{exp.role}</Typography>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: { md: 'none' }, mb: 1 }}
                      component="div"
                    >
                      {exp.period}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {exp.highlights.map((h) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={h}
                          sx={{ mb: 0.5, color: 'text.secondary' }}
                        >
                          {h}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </ScrollReveal>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
