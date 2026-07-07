import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
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

        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
          {/* vertical timeline line */}
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              bottom: 8,
              left: { xs: '23px', md: '50%' },
              width: '2px',
              ml: { md: '-1px' },
              bgcolor: 'primary.light',
              opacity: 0.5,
            }}
          />

          {experience.map((exp, i) => {
            const cardOnLeft = i % 2 === 1;
            return (
              <Box
                key={exp.company + exp.period}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: { xs: '48px 1fr', md: '1fr 48px 1fr' },
                  alignItems: 'center',
                  pb: { xs: 3, md: 4 },
                }}
              >
                {/* period — desktop only, opposite the card */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    gridRow: 1,
                    gridColumn: cardOnLeft ? '3' : '1',
                    textAlign: cardOnLeft ? 'left' : 'right',
                    px: 3,
                  }}
                >
                  {exp.period}
                </Typography>

                {/* dot */}
                <Box
                  sx={{
                    gridRow: 1,
                    gridColumn: { xs: '1', md: '2' },
                    justifySelf: 'center',
                    alignSelf: { xs: 'start', md: 'center' },
                    zIndex: 1,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 2,
                  }}
                  aria-hidden="true"
                >
                  {exp.company === 'Sela College' ? <SchoolIcon fontSize="small" /> : <WorkIcon fontSize="small" />}
                </Box>

                {/* card */}
                <Box
                  sx={{
                    gridRow: 1,
                    gridColumn: { xs: '2', md: cardOnLeft ? '1' : '3' },
                    pl: { xs: 2, md: cardOnLeft ? 0 : 3 },
                    pr: { xs: 0, md: cardOnLeft ? 3 : 0 },
                  }}
                >
                  <ScrollReveal delay={i * 150}>
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
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
