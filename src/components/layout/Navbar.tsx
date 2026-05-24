import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
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
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [resumeDialogOpen, setResumeDialogOpen] = useState(false);

  const handleDownload = () => {
    setResumeDialogOpen(false);
    const link = document.createElement('a');
    link.href = personal.resumePath;
    link.download = 'OsherCV.pdf';
    link.click();
  };

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
              onClick={() => setResumeDialogOpen(true)}
            >
              Resume
            </Button>
          </Box>

          {/* Mobile nav */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
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
          <ListItemButton onClick={() => { setDrawerOpen(false); setResumeDialogOpen(true); }}>
            <ListItemText primary="Download Resume" />
          </ListItemButton>
        </List>
      </Drawer>

      <Dialog
        open={resumeDialogOpen}
        onClose={() => setResumeDialogOpen(false)}
        slotProps={{ paper: { sx: { borderRadius: 3, px: 1 } } }}
      >
        <DialogTitle>Download Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Download Osher Elikamel's CV as a PDF file?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, px: 3 }}>
          <Button onClick={() => setResumeDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" startIcon={<DownloadIcon />} onClick={handleDownload}>
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
