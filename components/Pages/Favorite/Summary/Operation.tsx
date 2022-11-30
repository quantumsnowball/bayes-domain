import { Box, IconButton } from "@mui/material"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { favoriteActions } from "../../../../redux/slices/favoriteSlice"
import { Content } from "../../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'


export const OperationRow: FC<{ content: Content }> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))

  return (
    <Box sx={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }}>
      <IconButton
        color="error"
        size='small'
        onClick={e => {
          removeFavorite(content.title)
          e.stopPropagation()
        }}>
        <DeleteIcon />
      </IconButton>
      <IconButton
        color="primary"
        size='small'
        onClick={e => {
          setContent(content)
          e.stopPropagation()
        }}>
        <DownloadIcon />
      </IconButton>
    </Box>
  )
}

