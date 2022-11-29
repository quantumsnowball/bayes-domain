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
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { contentActions } from "../../redux/slices/contentSlice"


const MenuBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.title),
    (txt: string) => dispatch(contentActions.setTitle(txt))
  ]
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
        onClick={() => setTitle('hello')}
        sx={{ color: '#fff' }}
      >
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
          {title}
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
