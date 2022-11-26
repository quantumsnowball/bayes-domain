import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'


const MenuBar = () => {
  const isMobile = false
  const mode = 'light'

  return (
    <>
      <AppBar position={isMobile ? "fixed" : "static"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => alert('clicked icon button')}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            Bayes Theorem
          </Typography>
          <IconButton onClick={() => alert('toggle light/dark mode')}>
            {mode === 'light' ?
              <LightModeIcon sx={{ color: '#fff' }} /> :
              <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default MenuBar
