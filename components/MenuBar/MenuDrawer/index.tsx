import { Box, Divider, SwipeableDrawer } from '@mui/material'
import { VERSION } from '../../../constants'
import AboutMenu from './AboutMenu'
import { MenuTitle } from './common'
import SettingsMenu from './SettingsMenu'
import ThemeMenu from './ThemeMenu'


interface MenuDrawerProps {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuDrawer({ menuOpen, setMenuOpen }: MenuDrawerProps) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
    >
      <Box
        sx={{
          width: 250
        }}
        role="presentation"
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
      >
        <MenuTitle title={`Bayes, v${VERSION}`} />
        <Divider />
        <ThemeMenu />
        <Divider />
        <SettingsMenu />
        <Divider />
        <AboutMenu />
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer

