import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import BuildIcon from '@mui/icons-material/Build';
import BentoGrid from '../common/BentoGrid';
import BentoCard from '../common/BentoCard';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { skills, categoryLabels, type Skill } from '../../data/skills';

const categoryIcons: Record<Skill['category'], React.ReactNode> = {
  frontend: <CodeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  backend: <StorageIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  infrastructure: <DnsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
  tools: <BuildIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
};

export default function Skills() {
  const categories = Object.keys(categoryLabels) as Skill['category'][];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 10,
        bgcolor: (t) => (t.palette.mode === 'light' ? 'secondary.main' : 'background.default'),
      }}
    >
      <Container maxWidth="lg">
        <ScrollReveal>
          <SectionTitle title="Skills & Tech" subtitle="Technologies I work with" />
        </ScrollReveal>

        <BentoGrid columns={4}>
          {categories.map((category, i) => (
            <ScrollReveal key={category} delay={i * 150}>
              <BentoCard sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  {categoryIcons[category]}
                  <Typography variant="h6">{categoryLabels[category]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <Chip
                        key={skill.name}
                        label={skill.name}
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.light',
                          fontWeight: 500,
                          '&:hover': { bgcolor: 'primary.main', color: 'white' },
                          transition: 'all 300ms ease-in-out',
                        }}
                      />
                    ))}
                </Box>
              </BentoCard>
            </ScrollReveal>
          ))}
        </BentoGrid>
      </Container>
    </Box>
  );
}
