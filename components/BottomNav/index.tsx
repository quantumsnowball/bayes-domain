import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from 'next/link'


function BottomNav() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(0)

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          component={Link}
          href='/'
          label="Home"
          icon={<ExploreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href='/favorite'
          label="Favorite"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </>
  )
}

export default BottomNav

