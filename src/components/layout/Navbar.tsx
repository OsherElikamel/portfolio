import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import ThemeToggle from '../common/ThemeToggle';
import { personal } from '../../data/personal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: (t) => {
            const bg = t.palette.background.default;
            return bg.startsWith('#')
              ? `${bg}cc`
              : bg;
          },
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
          <Typography
            variant="h6"
            component="a"
            href="#"
            aria-label="Back to top"
            sx={{
              flexGrow: 1,
              color: 'text.primary',
              textDecoration: 'none',
              fontWeight: 700,
            }}
          >
            {personal.name}
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{ color: 'text.primary', fontWeight: 500 }}
              >
                {link.label}
              </Button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <Button
              variant="contained"
              size="small"
              startIcon={<DownloadIcon />}
              component="a"
              href={personal.resumePath}
              download="OsherElikamel-CV.pdf"
            >
              Resume
            </Button>
          </Box>

          {/* Mobile nav */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <IconButton aria-label="open menu" onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: 240, borderRadius: '20px 0 0 20px' } } }}
      >
        <List sx={{ pt: 4 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            component="a"
            href={personal.resumePath}
            download="OsherElikamel-CV.pdf"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary="Download Resume" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
