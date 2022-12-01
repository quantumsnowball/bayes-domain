import {
  AppBar,
  IconButton,
  Toolbar,
  useTheme
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState } from "react"
import MenuDrawer from "./MenuDrawer"
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import TitleSection from "./TitleSection"


const MenuBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const MenuButton = () =>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <MenuIcon />
    </IconButton>

  const ThemeModeButton = () =>
    <IconButton
      aria-label="Toggle Dark Mode"
      onClick={() => dispatch(themeActions.toggleMode())}
    >
      {theme.palette.mode === 'light' ?
        <LightModeIcon sx={{ color: '#fff' }} /> : <DarkModeIcon />}
    </IconButton>

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <MenuButton />
          <TitleSection />
          <ThemeModeButton />
        </Toolbar>
      </AppBar>
      <MenuDrawer {...{ menuOpen, setMenuOpen }} />
    </>
  )
}

export default MenuBar
