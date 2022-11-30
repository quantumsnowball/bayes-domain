import { Alert, Box, Button, IconButton, Snackbar } from "@mui/material"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { favoriteActions } from "../../../../redux/slices/favoriteSlice"
import { Content } from "../../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'


export const OperationRow: FC<{ content: Content }> = ({ content }) => {
  const dispatch = useDispatch()
  const [deleteButtonExtended, setDeleteButtonExtended] = useState(false)
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between'
      }}
      onClick={() => {
        setDeleteButtonExtended(false)
      }}
    >
      <Button
        color="error"
        startIcon={<DeleteIcon />}
        onClick={e => {
          if (!deleteButtonExtended) {
            setDeleteButtonExtended(true)
            e.stopPropagation()
            return
          }
          removeFavorite(content.title)
        }}>
        {deleteButtonExtended ? 'confirm delete' : ''}
      </Button>
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

