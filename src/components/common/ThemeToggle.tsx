import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <IconButton
      onClick={onToggle}
      aria-label="Toggle dark mode"
      sx={{
        color: 'text.primary',
        transition: 'transform 300ms ease-in-out',
        '&:hover': { transform: 'rotate(30deg)' },
      }}
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
