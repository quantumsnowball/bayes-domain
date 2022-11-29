import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState } from "react"
import MenuDrawer from "../MenuDrawer"
import { useDispatch } from "react-redux"
import { themeActions } from "../../redux/slices/themeSlice"
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'


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

  const TitleSection = () => {
    const EditTitleButton = () =>
      <IconButton
        sx={{ color: '#fff' }}>
        <EditIcon />
      </IconButton>

    const SaveAsButton = () =>
      <IconButton
        sx={{ color: '#fff' }}>
        <SaveAsIcon />
      </IconButton>

    return (
      <Box sx={{ flexGrow: 1 }}>
        <EditTitleButton />
        <Typography
          component="span"
          sx={{ cursor: 'pointer' }}
        >
          Untitled
        </Typography>
        <SaveAsButton />
      </Box>
    )
  }

  const ThemeModeButton = () =>
    <IconButton onClick={() => dispatch(themeActions.toggleMode())}>
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
